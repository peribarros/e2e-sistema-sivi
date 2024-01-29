describe('Site do Sistema SIVI', () => {
  it('Sliders', () => {
    cy.visit('/')
    cy.get('.close-btn').click()

    cy.contains('BEM VINDO AO SIVI').should('be.visible')
    cy.get('.tp-rightarrow')
      .click()

    cy.contains('Eleve a eficiência dos').should('be.visible')
    cy.get('.tp-rightarrow')
      .click()

    cy.wait(1000)

    cy.contains('Oferecemos o que há de melhor').should('be.visible')
    cy.get('.tp-rightarrow')
      .click()
  })

  it('Solução - menu', () => {
    cy.visit('/#solucao')
    cy.get('.close-btn').click()

    cy.contains('H2', 'COMO O SIVI SOLUCIONA OS PROBLEMAS?').should('be.visible')
  })
  it('Módulos - menu', () => {
    cy.visit('/#modulos')
    cy.get('.close-btn').click()

    cy.contains('H2', 'Administrativo').should('be.visible')
    // Financeiro
    cy.get('.col-xs-12.col-md-3 > .nav > :nth-child(2) > a').click()
    cy.contains('H2', 'Financeiro').should('be.visible')
    // Comercial
    cy.get('.col-xs-12.col-md-3 > .nav > :nth-child(3) > a').click()
    cy.contains('H2', 'Comercial').should('be.visible')
    // Relatórios
    cy.get('.col-xs-12.col-md-3 > .nav > :nth-child(4) > a').click()
    cy.contains('H2', 'Relatórios').should('be.visible')
    // Contábil
    cy.get('.col-xs-12.col-md-3 > .nav > :nth-child(5) > a').click()
    cy.contains('H2', 'Contábil').should('be.visible')
    // Mapa
    cy.get('.col-xs-12.col-md-3 > .nav > :nth-child(6) > a').click()
    cy.contains('H2', 'Mapa').should('be.visible')
    //Portal do Cliente
    cy.get('.col-xs-12.col-md-3 > .nav > :nth-child(7) > a').click()
    cy.contains('H2', 'Portal do Cliente').should('be.visible')
    // Portal do Parceiro
    cy.get('.col-xs-12.col-md-3 > .nav > :nth-child(8) > a').click()
    cy.contains('H2', 'Portal do Parceiro').should('be.visible')
  })

  it('Planos - menu', () => {
    cy.visit('/#planos')
    cy.get('.close-btn').click()

    cy.contains('H3', 'Begginer').should('be.visible')
    cy.get('#btnSoliciteOrcamentoBegginer').click()
    cy.get('#modalPecaOrcamento > .modal-dialog > .modal-content > .modal-footer > .btn-u-default').click()
    cy.contains('H3', 'Begginer').should('be.visible')

    cy.contains('H3', 'Basic').should('be.visible')
    cy.get('#btnSoliciteOrcamentoBasic').click()
    cy.get('#modalPecaOrcamento > .modal-dialog > .modal-content > .modal-footer > .btn-u-default').click()
    cy.contains('H3', 'Basic').should('be.visible')

    cy.contains('H3', 'Expert').should('be.visible')
    cy.get('#btnSoliciteOrcamentoExpert').click()
    cy.get('#modalPecaOrcamento > .modal-dialog > .modal-content > .modal-footer > .btn-u-default').click()
    cy.contains('H3', 'Expert').should('be.visible')
  })
})