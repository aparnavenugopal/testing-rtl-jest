import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button',() => {
    //render the component
     render(<UserForm/>);
    //manipulate the component or find element in it
     const inputs = screen.getAllByRole('textbox');
     const button = screen.getByRole('button');
   
    //assertion-make sure the component is doing what is expecting it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted',async () => {
    const mock = jest.fn();
    //not the best implementation
    // const argList = [];
    // const callback = (...args) => {
    //   argList.push(args);
    // }
    //try to render my component
    render(<UserForm onUserAdd={mock}/>);
    //find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole('textbox');
    const nameInput = screen.getByRole('textbox',{
        name: /name/i
     });
     const emailInput = screen.getByRole('textbox',{
        name: /email/i
     })
   
    //simulate typing in a name
    await user.click(nameInput);
    await user.keyboard('kitty');
    //simulate typing an email
    await user.click(emailInput);
    await user.keyboard('kitty@gmail.com');
    //find the button
    const button = screen.getByRole('button');
    //simulate clicking the button
    await user.click(button);
    //assertion to make sure 'onUserAdd' gets called with email/name
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({ name: 'kitty', email: 'kitty@gmail.com'});
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'kitty', email: 'kitty@gmail.com'});
})