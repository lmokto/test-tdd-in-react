import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from '../NewMessageForm';

describe('<NewMessageForm />', () => {

  let getByTestId;
  afterEach(cleanup);

  describe('clicking the send button', () => {
    let sendHandler;

    beforeEach(async () => {
      sendHandler = jest.fn().mockName('sendHandler');
      ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));
      await fireEvent.change(
        getByTestId('messageText'),
        'New message',
      );
      userEvent.click(getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('messageText').value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('');
    });

  });

});