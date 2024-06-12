import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderCoponent() {
    const users = [
        { name:'kitty', email:'kitty@gmail.com'},
        { name:'krishna', email:'krishna@gmail.com'}
    ]
    render(<UserList users={users}/>);
    return{
        users
    }
}

// beforeEach(() => {
//     render(<UserList users={users}/>);
// })

test('render one row per user',() => {

    // renderCoponent();
    //render the component
    const users = [
        { name:'kitty', email:'kitty@gmail.com'},
        { name:'krishna', email:'krishna@gmail.com'}
    ]
    const { container } = render(<UserList users={users}/>);
    //find all the rows in the table
    // const table = container.querySelector('table');
    // console.log(table);
    //eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');
    // screen.logTestingPlaygroundURL();
    // const rows = within(screen.getByTestId('users')).getAllByRole('row');
    //assertion:correct number of rows in the table
    expect(rows).toHaveLength(2);

});

test('render the email and name of the user',() => {
    const users = [
        { name:'kitty', email:'kitty@gmail.com'},
        { name:'krishna', email:'krishna@gmail.com'}
    ]
    render(<UserList users={users}/>);
    // screen.logTestingPlaygroundURL();
    for(let user of users){
        const name= screen.getByRole('cell', { name: user.name });
        const email= screen.getByRole('cell',{ name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});