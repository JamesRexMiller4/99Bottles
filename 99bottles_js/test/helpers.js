export const testPlaysVerseRole = rolePlayer => {
  test ('plays verse role', () => {
    expect(rolePlayer).toHaveProperty('lyrics', expect.any(Function));
  });
};