import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can recieve a new user and show it on the list',async () => {
  render(<App/>);

  const nameInput = screen.getByRole('textbox',{
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox',{
    name: /email/i
  });

  const button = screen.getByRole('button');
  
  await user.click(nameInput);
  await user.keyboard('kitty');
  await user.click(emailInput);
  await user.keyboard('kitty@gmail.com');

  await user.click(button);

  const name = screen.getByRole('cell', { name: 'kitty'});
  const email = screen.getByRole('cell',{ name: 'kitty@gmail.com'});

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();

  // screen.debug();


  
})
