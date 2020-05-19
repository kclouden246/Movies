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
}) 