describe("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("Display list of movies", () => {
        cy.get('li').then(() => {
            cy.get('li')
        })
    })
    // it("contains a search bar", () => {
    //     const searchBar = cy.get('#search-bar')
    //     expect(cy.get('#search-bar')).to.exist
    // })

    it("Shows movie details when clicking on a movie poster", () =>{
        cy.get('#1').click();
        expect(cy.get('#movieTitle').text()).toBe('Guardians of the Galaxy Vol. 2');
    })

    it("Contains a Login button", () => {
        expect(cy.get("#login")).to.exist
    })
    it("Verify email and password fields contain something", () => {
        cy.get("#email").type("user")
        cy.get("#password").type("pw")
        cy.get("#login").click()
    })
}) 