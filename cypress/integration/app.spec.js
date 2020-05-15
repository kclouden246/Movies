describe("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("Display list of movies", () => {
        cy.get('ul').then(() => {
            cy.get('li')
        })
    })
    it("contains a search bar", () => {
        const searchBar = cy.get('#search-bar')
        expect(cy.get('#search-bar')).to.exist
    })
}) 