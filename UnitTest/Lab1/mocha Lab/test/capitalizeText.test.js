describe("Test capitalText function return capitalized string", () => {
  it("should output capitalized string ", () => {
    capitalizeText("hamada").should.equal("HAMADA");
  });

  it("should output string type", () => {
    capitalizeText("hamada").should.be.a("string");
  });

  it("should throw error", () => {
    expect(capitalizeText).to.throw(TypeError, "parameter should be string");
  });
});
