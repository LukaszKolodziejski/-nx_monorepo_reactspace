import { getGreeting } from '../support/app.po';

describe('reactspace', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Dashboard', () => {
    getGreeting().contains('Dashboard Monitor');
  });
});
