describe('Test command_processor', () => {
  it('responds correctly to the "dance" command', () => {
    cy.visit('http://localhost:3000');
    cy.get('[id=command_box]').type('dance');
    cy.get('[id=send_btn').click();
    cy.get('[id=message_window ').should('have.text', 'You dance');
  });

  it('responds properly to the "look" command', () => {
    cy.visit('http://localhost:3000');
    cy.get('[id=command_box]').type('look');
    cy.get('[id=send_btn').click();
    cy.get('[id=message_window ').should('have.text', 'area where you start');
  });

  it('responds properly to the "smile" command', () => {
    cy.visit('http://localhost:3000');
    cy.get('[id=command_box]').type('smile');
    cy.get('[id=send_btn').click();
    cy.get('[id=message_window ').should('have.text', 'You smile');
  });

  it('responds properly to the "north" command', () => {
    cy.visit('http://localhost:3000');
    cy.get('[id=command_box]').type('north');
    cy.get('[id=send_btn').click();
    cy.get('[id=message_window ').should('have.text', 'area to the north');
  });

  it('responds properly to the "north" command when north exit is null', () => {
    cy.visit('http://localhost:3000');
    cy.get('[id=command_box]').type('north');
    cy.get('[id=send_btn').click();
    cy.get('[id=message_window ').should('have.text', 'there is no exit to the north');
  });
})