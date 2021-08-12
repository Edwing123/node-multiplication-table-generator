# Multiplication table generator
---

simple multiplication table generator CLI program.


# Help options

```
Options:
      --help        Show help                                                              [boolean]
      --version     Show version number                                                    [boolean]
  -b, --base        The base number to be used in the multiplication table       [number] [required]
  -l, --limit       The limit number to be used in the multiplication table   [number] [default: 12]
      --list, --ls  List the multiplication table results                 [boolean] [default: false]
```
## Examples

> In order to the tables files to be saved in `./data`,
> you need to create that directory before running the program.

```
# to get help.
node app --help

# to get the table for 10.
node app --base=10

# alternatively.
node app --base 10

# or the short version .
node app -b 10


# to limit the number of generated results, by the default is 12.
node app --base 12 --limit 10

# by default the generated table is not shown in the console,
# use the --list or --ls if you want to see it in the console.
node app --base 12 --ls
```