// Exercise 1: Matching Characters
// Task	Text
// Match	abcdefg	Success
// Match	abcde	Success
// Match	abc     Success

console.log(/a/.test("abcdefg"), /a/.test("abcde"), /a/.test("abc")); // true, true, true

// Exercise 1½: Matching Digits
// Task	Text
// Match	abc123xyz	Success
// Match	define "123"	Success
// Match	var g = 123;	Success

console.log(
  /123/.test("abc123xyz"),
  /123/.test('define "123"'),
  /123/.test("var g = 123")
); // true, true, true

// Exercise 2: Matching With Wildcards
// Task	Text
// Match	cat.	Success
// Match	896.	Success
// Match	?=+.	Success
// Skip	abc1

console.log(
  /\./.test("cat."),
  /\./.test("896."),
  /\./.test("?=+."),
  /\./.test("abc1")
); // true, true, true, false

// Exercise 3: Matching Characters
// Task	Text
// Match	can	Success
// Match	man	Success
// Match	fan	Success
// Skip	dan	To be completed
// Skip	ran	To be completed
// Skip	pan

console.log(
  /[cmf]/.test("can"),
  /[cmf]/.test("man"),
  /[cmf]/.test("fan"),
  /[cmf]/.test("dan"),
  /[cmf]/.test("ran"),
  /[cmf]/.test("pan")
); // true, true, true, false, false, false

// Exercise 4: Excluding Characters
// Task	Text
// Match	hog	To be completed
// Match	dog	To be completed
// Skip	bog

console.log(/[hd]/.test("hog"), /[hd]/.test("dog"), /[hd]/.test("bog")); // true, true, false

// Exercise 5: Matching Character Ranges
// Task	Text
// Match	Ana	Success
// Match	Bob	Success
// Match	Cpc	Success
// Skip	aax	To be completed
// Skip	bby	To be completed
// Skip	ccz	To be completed

console.log(
  /[A-C]/.test("Ana"),
  /[A-C]/.test("Bob"),
  /[A-C]/.test("Cpc"),
  /[A-C]/.test("aax"),
  /[A-C]/.test("bby"),
  /[A-C]/.test("ccz")
); // true, true, true, false, false, false

// Exercise 6: Matching Repeated Characters
// Task	Text
// Match	wazzzzzup	To be completed
// Match	wazzzup	To be completed
// Skip	wazup

console.log(/zz/.test("wazzzzzup"), /zz/.test("wazzzup"), /zz/.test("wazup")); // true, true, false

// Exercise 7: Matching Repeated Characters
// Task	Text
// Match	aaaabcc	Success
// Match	aabbbbc	Success
// Match	aacc	Success
// Skip	a

console.log(
  /c/.test("aaaabcc"),
  /c/.test("aabbbbc"),
  /c/.test("aacc"),
  /c/.test("a")
); // true, true, true, false

// Exercise 8: Matching Optional Characters
// Task	Text
// Match	1 file found?	To be completed
// Match	2 files found?	To be completed
// Match	24 files found?	To be completed
// Skip	No files found.

console.log(
  /\d/.test("1 file found?"),
  /\d/.test("2 files found?"),
  /\d/.test("24 files found?"),
  /\d/.test("No files found.")
); // true, true, true, false

// Exercise 9: Matching White spaces
// Task	Text
// Match	1.   abc	Success
// Match	2.	abc	Success
// Match	3.           abc	Success
// Skip	4.abc

console.log(
  /\s/.test("1.   abc"),
  /\s/.test("2.	abc"),
  /\s/.test("3.           abc"),
  /\s/.test("4.abc")
); // true, true, true, false

// Exercise 10: Matching Lines
// Task	Text
// Match	Mission: successful	Success
// Skip	Last Mission: unsuccessful	To be completed
// Skip	Next Mission: successful upon capture of target

console.log(
  /^M/.test("Mission: successful"),
  /^M/.test("Last Mission: unsuccessful"),
  /^M/.test("Next Mission: successful upon capture of target")
); // true, false, false

// Exercise 11: Matching Groups
// Task	Text	Capture Groups
// Capture	file_record_transcript.pdf
// Capture	file_07241999.pdf
// Skip	test file_fake.pdf.tmp

console.log(
  /^(.+)\.pdf$/.test("file_record_transcript.pdf"),
  /^(.+)\.pdf$/.test("file_07241999.pdf"),
  /^(.+)\.pdf$/.test("file_fake.pdf.tmp")
); // true, true, false

// Exercise 12: Matching Nested Groups
// Task	Text	Capture Groups
// Capture	Jan 1987	Jan 1987 1987	To be completed
// Capture	May 1969	May 1969 1969	To be completed
// Capture	Aug 2011	Aug 2011 2011	To be completed

console.log(
  /((\w{3})+(\s)+(\d{4}))| (\d{4})/.test("Jan 1987"),
  /((\w{3})+(\s)+(\d{4}))| (\d{4})/.test("May 1969"),
  /((\w{3})+(\s)+(\d{4}))| (\d{4})/.test("Aug 2011")
); // true, true, true

// Exercise 13: Matching Nested Groups
// Task	Text	Capture Groups
// Capture	1280x720	1280 720	Success
// Capture	1920x1600	1920 1600	Success
// Capture	1024x768	1024 768	Success

console.log(
  /^(\d{4})+x+(\d{4}|\d{3})/.test("1280x720"),
  /^(\d{4})+x+(\d{4}|\d{3})/.test("1920x1600"),
  /^(\d{4})+x+(\d{4}|\d{3})/.test("1024x768")
); // true, true, true

// Exercise 14: Matching Conditional Text
// Task	Text
// Match	I love cats	Success
// Match	I love dogs	Success
// Skip	I love logs	To be completed
// Skip	I love cogs

console.log(
  /I love( cats| dogs)/.test("I love cats"),
  /I love( cats| dogs)/.test("I love dogs"),
  /I love( cats| dogs)/.test("I love logs"),
  /I love( cats| dogs)/.test("I love cogs")
); // true, true, false, false
