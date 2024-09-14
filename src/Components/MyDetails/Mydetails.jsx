import { useState, useEffect } from 'react';
import { Details, Input, Main, InputType, SubmitButton } from '../AsideMyAccount.jsx/styled';
import { auth } from '../../Firebase';
import { updateEmail, updateProfile } from 'firebase/auth';
import UpdatePhoto from '../UpdateProfile/updatePhoto';

function Mydetails() {
    const [name, setName] = useState('');

    useEffect(() => {
        const jsonData = localStorage.getItem('users');
        if (jsonData) {
            const data = JSON.parse(jsonData);
            const { displayName,email } = data;
            setName(displayName || email);
        }
    }, []);

  
    const updateProfileData = () => {
        console.log(name)
        updateProfile(auth.currentUser, {
            displayName: name,
           
        }).then(() => {
            console.log('Profile updated successfully!');
            console.log(auth.currentUser)
        }).catch(error => {
            console.error('Error updating profile: ', error);
        });
        let user = JSON.parse(localStorage.getItem('users'));
        user.displayName = name;
        localStorage.setItem('users', JSON.stringify(user));

window.location.reload()
        // phone güncellemesi için farklı bir API kullanmalısınız.
    }


    return (
        <Main>
            <h2>{name }</h2>
            <Details>
               <UpdatePhoto/>
                
                <Input>
                    Full name: <InputType value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder={"Ad"} />
                </Input>
               
                <SubmitButton onClick={updateProfileData} type="button" value="Change" />
            </Details>
        </Main>
    );
}

export default Mydetails;
