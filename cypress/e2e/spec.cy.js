
// describe('Login test with Cypress', () => {
//   it('Login Scenario', () => {
//     cy.visit('http://localhost:3000/login')
//     cy.get('#basic_email').type("tajar@mailinator.com")
//     cy.get('#basic__password').type("Pa$$w0rd!")
//     cy.get("button[type='submit']").click()
//     cy.get("svg[xmlns='http://www.w3.org/2000/svg']")
//       .should('be.visible')
//       .log('Login to the application is successful')

//   })
// })

describe('Login test with Cypress', () => {
  it('Login Scenario', () => {
<<<<<<< HEAD
    const testEmail = 'taja@mailinator.com';
=======
    const testEmail = 'tajar@mailinator.com';
>>>>>>> origin/master
    const testPassword = 'Pa$$w0rd!';

    // Make API request with dynamic values
    cy.request('POST', 'http://localhost/wp/v2.0.0/signin.php', {
      email: testEmail,
      _password: testPassword
    }).then((response) => {
      // Check if the API call was successful
      expect(response.status).to.eq(200);

      // Check if the API response contains the expected error message
      if (response.body && response.body.data === 'BELE ISTIFADECI MOVCUD DEYIL') {
        cy.log('User does not exist. Test passes as expected.');
      } else {
        // Perform actions after successful authentication
        cy.visit('http://localhost:3000/Wpchat/login');

        // Check if the login page is loaded successfully
        cy.url().should('include', '/login');

        // Type email and password using the same values from the API request
        cy.get('#basic_email').type(testEmail);
        cy.get('#basic__password').type(testPassword);

        // Click the submit button
        cy.get("button[type='submit']").click();

        // Add a wait or use a Cypress command to wait for the login success condition
        cy.get("svg[xmlns='http://www.w3.org/2000/svg']", { timeout: 5000 })
          .should('be.visible')
          .log('Login to the application is successful');
      }
    });
  });
});
