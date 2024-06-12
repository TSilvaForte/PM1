const {Activity, Repository} = require ("../scripts/models.js")

describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

describe("Testing Activity", () => {
  it ("las instancias de Activity tienen los atributos requeridos", () => {
      const newActivity= new Activity ()
      const attributes = Object.keys (newActivity)
      expect (attributes.length).toBe(4)
      expect (attributes).toContain("id")
      expect (attributes).toContain("title")
      expect (attributes).toContain("description")
      expect (attributes).toContain("imgUrl")
    })
})

describe ("Testing Repository", () => {
  it ("las instancias de Repository tienen los atributos requeridos", () => {
    const newRepository = new Repository ()
    const attributes = Object.keys (newRepository)
      expect (attributes.length).toBe(2)
      expect (attributes).toContain("activities")
      expect (attributes).toContain("id")
      expect (newRepository.activities).toEqual([])
      expect (newRepository.id).toBe(1)
  })
})
