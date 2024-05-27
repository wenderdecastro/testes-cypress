describe('Visualizar playlists na Aplicação de Música', () => {
	before(() => {
		cy.visit('/');
	});

	it('Verificação da visibilidade do Header', () => {
		cy.wait(1000);

		cy.get("[aria-label='title-head']")
			.should('be.visible')
			.should('contain', 'Good morning');
	});

	it('Verificação da existência da lista de playlists', () => {
		cy.wait(1000);
		cy.get("[aria-label='playlist-item']").should(
			'have.length.at.least',
			1,
		);
	});

	it('Click no primeiro item da playlist', () => {
		cy.wait(1000);

		cy.get("[aria-label='playlist-item']").first().click();
	});

	it('Verificação da existência de musicas na playlist', () => {
		cy.wait(1000);

		cy.get("[aria-label='music-item']").should(
			'have.length.at.least',
			1,
		);
	});
	it('Click na primeira musica da lista', () => {
		cy.wait(1000);

		cy.get("[aria-label='music-item']").first().click();
	});
});

describe('Navegar entre playlists e executar outra música', () => {
	before(() => {
		cy.visit('/');
	});

	it('Verificação da existência da lista de playlists', () => {
		cy.wait(1000);
		cy.get("[aria-label='playlist-item']").should(
			'have.length.at.least',
			1,
		);
	});

	it('Click no primeiro item da playlist', () => {
		cy.wait(1000);

		cy.get("[aria-label='playlist-item']").eq(1).click();
	});

	it('Verificação da existência de musicas na playlist', () => {
		cy.wait(1000);

		cy.get("[aria-label='music-item']").should(
			'have.length.at.least',
			1,
		);
	});
	it('Click na primeira musica da lista', () => {
		cy.wait(1000);

		cy.get("[aria-label='music-item']").first().click();
	});
});

describe('Procurar e favoritar uma música', () => {
	before(() => {
		cy.visit('/');
	});
	it('Navegar para a tela de pesquisa', () => {
		cy.wait(1000);

		cy.get("[href='/Search']").click();
	});

	it('Procurar por uma música', () => {
		cy.get("[data-testid='campoBusca']")
			.click()
			.type('A BOY IS A GUN*');
	});

	it('Tocar a música', () => {
		cy.wait(1000);
		cy.get("[aria-label='music-item']")
			.filter(":contains('A BOY IS A GUN*')")
			.click();
	});

	it('Favoritar a música', () => {
		cy.wait(1000);

		cy.get("[aria-label='music-item']")
			.filter(":contains('A BOY IS A GUN*')")
			.then(async (item) => {
				cy.wrap(item)
					.find("[data-testid='feedback-button']")
					.first()
					.click();
			});
	});
});

describe('Verificar música favoritada na tela de Favoritos', () => {
	before(() => {
		cy.visit('/');
	});

	it('Navegar para tela de Favoritos', () => {
		cy.get("[href='/Favorites']").click();
	});

	it('Verificação da existência de musicas na playlist', () => {
		cy.wait(1000);

		cy.get("[aria-label='music-item']").should(
			'have.length.at.least',
			1,
		);
	});
	it('Click na primeira musica da lista', () => {
		cy.wait(1000);

		cy.get("[aria-label='music-item']").first().click();
	});
});
