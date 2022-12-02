// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello',function (){
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, World"', function () {
        expect(sayHello()).toBe(("Hello, World!"));
    });
    it('should return true', function () {
        expect(sayHello(true)).toBe(("Hello, World!"))
    });
        it('should return false', function () {
            expect(sayHello(false)).toBe(("Hello, World!"))
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
});

describe('isFive', function (){
    it('should be a boolean no matter what', function (){
        expect(isFive(5)).toBe(true)
    });
    it('should return false if not 5', function () {
        expect(isFive(6)).toBe(false)
    });
    it('should return true if passed "5', function () {
        expect(isFive("5")).toBe(true)
    });
});
describe('isEven', function (){
    it('should be a boolean no matter what', function () {
        expect(isEven(2)).toBe( true);
    });
    it('should return true when 2 is passed', function () {
        expect(isEven(2)).toBe( true);
    });
    it('should return true when -4 is passed', function () {
        expect(isEven(-4)).toBe( true);
    });
    it('should return false when banana is passed', function () {
        expect(isEven("banana")).toBe( false);
    });
    it('should return true when 8 is passed', function () {
        expect(isEven(8)).toBe( true);
    });
    it('should return false when infinity is passed', function () {
        expect(isEven('infinity')).toBe( false);
    });
    it('should return false when input like true or false', function () {
        expect(isEven('true'|| 'false')).toBe( false);
    });
    it('should return false when without an arguement', function () {
        expect(isEven('')).toBe( false);
    });
})

describe('isVowel', function (){
    it('should be a boolean no matter what', function () {
        expect(isVowel('a')).toBe( true);
    });
    it('should return true when A is passed', function () {
        expect(isVowel("A")).toBe( true);
    });
    it('should return true when "a" is passed', function () {
        expect(isVowel("a")).toBe( true);
    });
    it('should return false when 4 is passed', function () {
        expect(isVowel('4')).toBe( false);
    });
    it('should return false when "true" or "false" is passed', function () {
        expect(isVowel("true"||"false")).toBe( false);
    });
    it('should return false when "banana" is passed', function () {
        expect(isVowel("banana")).toBe( false);
    });
    it('should return false when " " is passed', function () {
        expect(isVowel("")).toBe( false);
    });
});

describe('add', function (){
    it('Add 2 with 3 should return 5', function () {
        expect(add(2, 3)).toBe( 5);
    });
    it('Add -3, -9 should return -12', function () {
        expect(add(-3, -9)).toBe( -12);
    });
    it('should return NaN when "banana" + "Split', function () {
        expect(add('banana','split')).toBeNaN();
    });
    it('should return NaN when 2 and apples is passed', function () {
        expect(add(2,'apples')).toBeNaN();
    });
});