/* block comments can go on multiple lines BUT THEY SHOULD BE AVOIDED,
because sometimes this syntax appears in regex literals. I'll use them 
in this only for the sake of readability. */

// inline comments are safer.

/*
------- RESERVED WORDS ----------
abstract
boolean
break
byte
case
catch
char
class
constcontinue
debugger
default
delete
dondouble
else
enum
export
extends
false
final
finally
float
for
var
function
goto
if
implements
import
ininstanceof
int
interface
long
native
var null = new type(arguments);package
private
protected
public
return
short
static
super
switch
synchronized
thisthrow
throws
transient
true
try
typeof
var
volatile
void
while
with
*/


const that = this;
console.log(this);
console.log(that);

console.log('c'+'a'+'t');
console.log('cat'.toUpperCase());

const test = {
  hello: "hello",
  world: "world",
}

console.log(test.hello + ' ' + test.world);