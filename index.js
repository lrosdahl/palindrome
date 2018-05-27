// Function to find if a word or phrase is a palindrome

module.exports = Phrase;

// Adds the reverses-a-string function to the String object
String.prototype.reverse = function () {
		return Array.from(this).reverse().join("");
}

// See if a string is blank
String.prototype.blank = function() {
		return !!(this.match(/^\s*$/));
}

// Defines a Phrase object
function Phrase(content) {
		this.content = content;

		// Return a lowercase string
		this.processor = function(string) {
				return string.toLowerCase();
		}

		// Return processed content
		this.processedContent = function() {
				return this.processor(this.content);
		}

		// Returns true for a palindrome, false otherwise.
		this.palindrome = function palindrome() {
				return this.processedContent() === this.processedContent().reverse();
		}
}

// Use prototype to inherit another Objects methods
//function TranslatedPhrase(content, translation) {
//		this.content = content;
//		this.translation = translation;
//
//		// Returns true for a palindrome, false otherwise.
//		this.processedContent = function() {
//				return this.processor(this.translation);
//		}
//}
//
//
//TranslatedPhrase.prototype = new Phrase();

// *********************************

// fat arrow functions
//let palindrome = string => {
//		return string === reverse(string);
//}
//
//let reverse = string => {
//		return string.toLowerCase().split("").reverse().join("");
//}
