const axios = require('axios');
const { Selector } = require('testcafe');

fixture`Login Suite`.page(`http://localhost:3000/Wpchat/login`);

test('Login', async (t) => {
    // Function to check if email and password exist in the API
    const areCredentialsValid = async (email, password) => {
        try {
            // Make a request to your API to verify credentials
            const response = await axios.post('http://localhost/wp/v2.0.0/signin.php', {
                email: email,
                _password: password,
            });

            return response.status === 200 && response?.data?.data !== 'BELE ISTIFADECI MOVCUD DEYIL';
        } catch (error) {
            // Handle errors, e.g., API request failure
            console.error('API request failed:', error);
            return false;
        }
    };

    // Set your email and password
    const email = 'tajar@mailinator.com';
    const password = 'Pa$$w0rd!';

    // Check if email and password exist in the API
    const credentialsExist = await areCredentialsValid(email, password);

    // If credentials exist, proceed with the login
    if (credentialsExist) {
        await t
            .typeText("#basic_email", email)
            .typeText("#basic__password", password)
            .click("button[type='submit']")
            // .expect(Selector(".ant-image-img").exists)
            // .ok({ timeout: 5000 })
            .expect(Selector(".ant-image-img").visible).ok();
    } else {
        console.error('Invalid credentials');

        // Check if the error message is displayed
        const buttonSelector = Selector('.ant-btn.css-dev-only-do-not-override-xu9wm8.ant-btn-primary');
        await t.expect(buttonSelector.exists).ok();
    }
});