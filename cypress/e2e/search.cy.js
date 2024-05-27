describe('Search Unit Tests', () => {
	before(() => cy.visit('/'));

	it('testRedirectToSearchPage', () => {
		cy.get("[href='/Search']").click();
	});

	// it('When_ClickOnSearchField_Should_Focus', () => {
	// 	cy.get("[data-testid='campoBusca']").click().should('focus');
	// });

	it('When_ClickOnFeedbackButton_Should_SwitchFeedback', () => {
		cy.get("[data-testid='campoBusca']").click().type('earfquake');
		cy.wait(1000);
		cy.get("[aria-label='music-item']")
			.filter(":contains('EARFQUAKE')")
			.then(async (item) => {
				cy.wrap(item)
					.find("[data-testid='feedback-button']")
					.first()
					.click();
			});
	});
});
