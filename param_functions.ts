
//import {login_id,login_pw,test_dependncies} from '../inputs/demo_inputs'
import {login_id,login_pw} from '../inputs/demo_inputs'

async function login_functionality({page}){
    let login_user = login_id;
    let login_password = login_pw;
    //login creds 
    await page.getByPlaceholder('someone@example.com').fill(login_user);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'log in' }).click();
    await page.getByLabel('Password').fill(login_password);
    await page.getByRole('button', { name: 'Verify' }).click();
    //getByLabel('Select to get a push')
    await page.getByLabel('Select to get a push').click();

}

export{login_functionality}