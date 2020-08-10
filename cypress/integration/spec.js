describe("Sapper template app", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("has the correct <h1>", () => {
		cy.contains("h1");
	});

	it("navigates to /#about", () => {
		cy.get("nav a").contains("about").click();
  });

  it("navigates to /#experience", () => {
		cy.get("nav a").contains("experience").click();
	});
  
  it("navigates to /#contact", () => {
		cy.get("nav a").contains("contact").click();
  });

	it("navigates to /blog", () => {
		cy.get("nav a").contains("blog").click();
		cy.url().should("include", "/blog");
	});
});
