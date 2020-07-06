# Sum columns - Quickly sum all values in column

This is a small javascript tool that only does one simple thing: sum values in a given column of data.

There are an infinite number of ways to do this, of course, but I got tired of firing up calculators, command-lines, or spreadsheet software when I already have a browser window open.

## Supported features

* Live search (results update as you type)
* Works offline (just clone or download this repository and open `index.html` in any browser)
* [Online demo](https://dohliam.github.io/tiny_tools/sum/) available
* Display total number of values summed (useful for calculating averages)
* Advanced options: specify field separator and field to sum

## Usage

Enter data in the **Input** box. All non-numeric data is stripped and the values to be summed are shown in the **Sum values** column on the right.

![screenshot](https://cloud.githubusercontent.com/assets/9295750/19641085/777f92d8-9994-11e6-8e77-24dc78380ab5.png)

Click the **Calculate sum** button to update the result field at the bottom of the page.

## Advanced options

The advanced options are revealed by clicking the corresponding checkbox below the result field.

Two options can be specified: **Field separator** and **Field to sum**.

Entering a character or string in the _Field separator_ box identifies it as a delimiter, and the text in the _Input_ box will be split into columns wherever this delimiter occurs. For example, the _Field separator_ is initially set to `\t` by default, which means that columns will be separated by tabs. Setting the _Field separator_ to `,` would split the input text at commas.

The value in the _Field to sum_ box should specify the number of the column to summed after the input data has been split by the string in the _Field separator_ box. So, for example, the initial value of `2` means that the values in the **second** column would be used. This can be useful if you have several columns of data and only want to sum one of them (as in a spreadsheet program).

## See also

"Sum columns" is part of the [**tiny tools**](https://dohliam.github.io/tiny_tools/) series.

Other small tools for working with columns of data that might also be of interest:

* [Compare columns](https://github.com/dohliam/compare-columns)
* [Elements of _a_ in _b_](https://github.com/dohliam/elements-of-a-in-b)
* [Sort columns](https://github.com/dohliam/sort-columns)

## Credits

* [milligram](https://github.com/milligram/milligram) CSS by @cjpatoilo, prototyped using [dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css)
* [github-corners](https://github.com/tholman/github-corners) by @tholman

## License

MIT.
