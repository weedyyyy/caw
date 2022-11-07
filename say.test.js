const say = require('./say')

test("it say hi", ()=>{
    expect(say()).toBe("hello");
})