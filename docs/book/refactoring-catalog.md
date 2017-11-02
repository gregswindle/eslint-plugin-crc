## Refactoring catalog

### Add Parameter

**Tags:** method calls

A method needs more information from its caller.

Add a parameter for an object that can pass on this information.

[more…](https://refactoring.com/catalog/addParameter.html)

---

### Change Bidirectional Association to Unidirectional

**Tags:** associations, organizing data

You have a two-way association but one class no longer needs features from the other.

Drop the unneeded end of the association.

[more…](https://refactoring.com/catalog/changeBidirectionalAssociationToUnidirectional.html)

---

### Change Reference to Value

**Tags:** associations, organizing data

You have a reference object that is small, immutable, and awkward to manage.

Turn it into a value object.

[more…](https://refactoring.com/catalog/changeReferenceToValue.html)

---

### Change Unidirectional Association to Bidirectional

**Tags:** associations, organizing data

You have two classes that need to use each other's features, but there is only a one-way link.

Add back pointers, and change modifiers to update both sets.

[more…](https://refactoring.com/catalog/changeUnidirectionalAssociationToBidirectional.html)

---

### Change Value to Reference

**Tags:** associations, organizing data

You have a class with many equal instances that you want to replace with a single object.

Turn the object into a reference object.

[more…](https://refactoring.com/catalog/changeValueToReference.html)

---

### Collapse Hierarchy

**Tags:** inheritance

A superclass and subclass are not very different.

Merge them together.

[more…](https://refactoring.com/catalog/collapseHierarchy.html)

---

### Consolidate Conditional Expression

**Tags:** conditionals, composing methods

You have a sequence of conditional tests with the same result.

Combine them into a single conditional expression and extract it.

[more…](https://refactoring.com/catalog/consolidateConditionalExpression.html)

---

### Consolidate Duplicate Conditional Fragments

**Tags:** conditionals

The same fragment of code is in all branches of a conditional expression.

Move it outside of the expression.

[more…](https://refactoring.com/catalog/consolidateDuplicateConditionalFragments.html)

---

### Decompose Conditional

**Tags:** conditionals, composing methods

You have a complicated conditional (if-then-else) statement.

Extract methods from the condition, then part, and else parts.

[more…](https://refactoring.com/catalog/decomposeConditional.html)

---

### Duplicate Observed Data

**Tags:** associations, organizing data

You have domain data available only in a GUI control, and domain methods need access.

Copy the data to a domain object. Set up an observer to synchronize the two pieces of data.

[more…](https://refactoring.com/catalog/duplicateObservedData.html)

---

### Dynamic Method Definition

**Tags:** defining methods

You have methods that can be defined more concisely if defined dynamically.

Define the methods dynamically.

[more…](https://refactoring.com/catalog/dynamicMethodDefinition.html)

---

### Eagerly Initialized Attribute

**Tags:** organizing data

Lazily initialization is causing more confusion than benefit

Initialize the attribute when you instantiate the object

[more…](https://refactoring.com/catalog/eagerlyInitializedAttribute.html)

---

### Encapsulate Collection

**Tags:** encapsulation, organizing data

A method returns a collection.

Make it return a read-only view and provide add/remove methods.

[more…](https://refactoring.com/catalog/encapsulateCollection.html)

---

### Encapsulate Downcast

**Tags:** encapsulation, method calls, inheritance

A method returns an object that needs to be downcasted by its callers.

Move the downcast to within the method.

[more…](https://refactoring.com/catalog/encapsulateDowncast.html)

---

### Encapsulate Field

**Tags:** encapsulation, organizing data

There is a public field.

Make it private and provide accessors.

[more…](https://refactoring.com/catalog/encapsulateField.html)

---

### Extract Class

**Tags:** associations, class extraction, moving features

You have one class doing work that should be done by two.

Create a new class and move the relevant fields and methods from the old class into the new class.

[more…](https://refactoring.com/catalog/extractClass.html)

---

### Extract Interface

**Tags:** interfaces, class extraction, inheritance

Several clients use the same subset of a class's interface, or two classes have part of their interfaces in common.

Extract the subset into an interface.

[more…](https://refactoring.com/catalog/extractInterface.html)

---

### Extract Method

**Tags:** composing methods

You have a code fragment that can be grouped together.

Turn the fragment into a method whose name explains the purpose of the method.

[more…](https://refactoring.com/catalog/extractMethod.html)

---

### Extract Module

**Tags:** class extraction, inheritance, moving features

You have duplicated behavior in two or more classes.

You have duplicated behavior in two or more classes.

[more…](https://refactoring.com/catalog/extractModule.html)

---

### Extract Subclass

**Tags:** class extraction, inheritance

A class has features that are used only in some instances.

Create a subclass for that subset of features.

[more…](https://refactoring.com/catalog/extractSubclass.html)

---

### Extract Superclass

**Tags:** class extraction, inheritance

You have two classes with similar features.

Create a superclass and move the common features to the superclass.

[more…](https://refactoring.com/catalog/extractSuperclass.html)

---

### Extract Surrounding Method

**Tags:** composing methods

You have two methods that contain nearly identical code. The variance is in the middle of the method.

Extract the duplication into a method that accepts a block and yields back to the caller to execute the unique code.

[more…](https://refactoring.com/catalog/extractSurroundingMethod.html)

---

### Extract Variable

**Tags:** local variables, composing methods

You have a complicated expression.

Put the result of the expression, or parts of the expression, in a temporary variable with a name that explains the purpose.

[more…](https://refactoring.com/catalog/extractVariable.html)

---

### Form Template Method

**Tags:** GOF Patterns, inheritance, composing methods

You have two methods in subclasses that perform similar steps in the same order, yet the steps are different.

Get the steps into methods with the same signature, so that the original methods become the same. Then you can pull them up.

[more…](https://refactoring.com/catalog/formTemplateMethod.html)

---

### Hide Delegate

**Tags:** encapsulation, moving features

A client is calling a delegate class of an object.

Create methods on the server to hide the delegate.

[more…](https://refactoring.com/catalog/hideDelegate.html)

---

### Hide Method

**Tags:** encapsulation, method calls

A method is not used by any other class.

Make the method private.

[more…](https://refactoring.com/catalog/hideMethod.html)

---

### Inline Class

**Tags:** associations, moving features

A class isn't doing very much.

Move all its features into another class and delete it.

[more…](https://refactoring.com/catalog/inlineClass.html)

---

### Inline Method

**Tags:** composing methods

A method's body is just as clear as its name.

Put the method's body into the body of its callers and remove the method.

[more…](https://refactoring.com/catalog/inlineMethod.html)

---

### Inline Module

**Tags:** moving features

The resultant indirection of the included module is no longer worth the duplica- tion it is preventing.

Merge the module into the including class.

[more…](https://refactoring.com/catalog/inlineModule.html)

---

### Inline Temp

**Tags:** local variables, composing methods

You have a temp that is assigned to once with a simple expression, and the temp is getting in the way of other refactorings.

Replace all references to that temp with the expression.

[more…](https://refactoring.com/catalog/inlineTemp.html)

---

### Introduce Assertion

**Tags:** conditionals

A section of code assumes something about the state of the program.

Make the assumption explicit with an assertion.

[more…](https://refactoring.com/catalog/introduceAssertion.html)

---

### Introduce Class Annotation

**Tags:** defining methods

You have a method whose implementation steps are so common that they can safely be hidden away.

Declare the behavior by calling a class method from the class definition.

[more…](https://refactoring.com/catalog/introduceClassAnnotation.html)

---

### Introduce Expression Builder

**Tags:** method calls

You want to interact with a public interface in a more fluent manner and not muddy the interface of an existing object.

Introduce an Expression Builder and create an interface specific to your application.

[more…](https://refactoring.com/catalog/introduceExpressionBuilder.html)

---

### Introduce Foreign Method

**Tags:** vendor libraries, moving features

A server class you are using needs an additional method, but you can't modify the class.

Create a method in the client class with an instance of the server class as its first argument.

[more…](https://refactoring.com/catalog/introduceForeignMethod.html)

---

### Introduce Gateway

**Tags:** vendor libraries, method calls

You want to interact with a complex API of an external system or resource in a simplified way

Introduce a Gateway that encapsulates access to an external system or resource

[more…](https://refactoring.com/catalog/introduceGateway.html)

---

### Introduce Local Extension

**Tags:** vendor libraries, moving features

A server class you are using needs several additional methods, but you can't modify the class.

Create a new class that contains these extra methods. Make this extension class a subclass or a wrapper of the original.

[more…](https://refactoring.com/catalog/introduceLocalExtension.html)

---

### Introduce Named Parameter

**Tags:** method calls

The parameters in a method call cannot easily be deduced from the name of the method you are calling.

Convert the parameter list into a Hash, and use the keys of the Hash as names for the parameters.

[more…](https://refactoring.com/catalog/introduceNamedParameter.html)

---

### Introduce Null Object

**Tags:** inheritance, conditionals

You have repeated checks for a null value.

Replace the null value with a null object.

[more…](https://refactoring.com/catalog/introduceNullObject.html)

---

### Introduce Parameter Object

**Tags:** class extraction, method calls

You have a group of parameters that naturally go together.

Replace them with an object.

[more…](https://refactoring.com/catalog/introduceParameterObject.html)

---

### Isolate Dynamic Receptor

**Tags:** defining methods

A class utilizing method_missing has become painful to alter.

Introduce a new class and move the method_missing logic to that class.

[more…](https://refactoring.com/catalog/isolateDynamicReceptor.html)

---

### Lazily Initialized Attribute

**Tags:** organizing data

An attribute takes time to initialize but is only accessed rarely

Initialize when it's first used

[more…](https://refactoring.com/catalog/lazilyInitializedAttribute.html)

---

### Move Eval from Runtime to Parse Time

**Tags:** composing methods

You need to use eval but want to limit the number of times eval is necessary.

Move the use of eval from within the method definition to defining the method itself.

[more…](https://refactoring.com/catalog/moveEvalFromRuntimeToParseTime.html)

---

### Move Field

**Tags:** moving features

A field is, or will be, used by another class more than the class on which it is defined.

Create a new field in the target class, and change all its users.

[more…](https://refactoring.com/catalog/moveField.html)

---

### Move Method

**Tags:** moving features

A method is, or will be, using or used by more features of another class than the class on which it is defined.

Create a new method with a similar body in the class it uses most. Either turn the old method into a simple delegation, or remove it altogether.

[more…](https://refactoring.com/catalog/moveMethod.html)

---

### Parameterize Method

**Tags:** method calls

Several methods do similar things but with different values contained in the method body.

Create one method that uses a parameter for the different values.

[more…](https://refactoring.com/catalog/parameterizeMethod.html)

---

### Preserve Whole Object

**Tags:** encapsulation, method calls

You are getting several values from an object and passing these values as parameters in a method call.

Send the whole object instead.

[more…](https://refactoring.com/catalog/preserveWholeObject.html)


<div class="right">

---

### Pull Up Constructor Body

**Tags:** inheritance

You have constructors on subclasses with mostly identical bodies.

Create a superclass constructor; call this from the subclass methods.

[more…](https://refactoring.com/catalog/pullUpConstructorBody.html)

---

### Pull Up Field

**Tags:** inheritance

Two subclasses have the same field.

Move the field to the superclass.

[more…](https://refactoring.com/catalog/pullUpField.html)

---

### Pull Up Method

**Tags:** inheritance

You have methods with identical results on subclasses.

Move them to the superclass.

[more…](https://refactoring.com/catalog/pullUpMethod.html)

---

### Push Down Field

**Tags:** inheritance

A field is used only by some subclasses.

Move the field to those subclasses.

[more…](https://refactoring.com/catalog/pushDownField.html)

---

### Push Down Method

**Tags:** inheritance

Behavior on a superclass is relevant only for some of its subclasses.

Move it to those subclasses.

[more…](https://refactoring.com/catalog/pushDownMethod.html)

---

### Recompose Conditional

**Tags:** conditionals

You have conditional code that is unnecessarily verbose and does not use the most readable Ruby construct.

Replace the conditional code with the more idiomatic Ruby construct.

[more…](https://refactoring.com/catalog/recomposeConditional.html)

---

### Remove Assignments to Parameters

**Tags:** local variables, composing methods

The code assigns to a parameter.

Use a temporary variable instead.

[more…](https://refactoring.com/catalog/removeAssignmentsToParameters.html)

---

### Remove Control Flag

**Tags:** method calls, conditionals

You have a variable that is acting as a control flag for a series of boolean expressions.

Use a break or return instead.

[more…](https://refactoring.com/catalog/removeControlFlag.html)

---

### Remove Middle Man

**Tags:** moving features

A class is doing too much simple delegation.

Get the client to call the delegate directly.

[more…](https://refactoring.com/catalog/removeMiddleMan.html)

---

### Remove Named Parameter

**Tags:** method calls

The fluency that the named parameter brings is no longer worth the complexity on the receiver.

Convert the named parameter Hash to a standard parameter list.

[more…](https://refactoring.com/catalog/removeNamedParameter.html)

---

### Remove Parameter

**Tags:** method calls

A parameter is no longer used by the method body.

Remove it.

[more…](https://refactoring.com/catalog/removeParameter.html)

---

### Remove Setting Method

**Tags:** encapsulation, method calls

A field should be set at creation time and never altered.

Remove any setting method for that field.

[more…](https://refactoring.com/catalog/removeSettingMethod.html)

---

### Remove Unused Default Parameter

**Tags:** defining methods

A parameter has a default value, but the method is never called without the parameter.

Remove the default value

[more…](https://refactoring.com/catalog/removeUnusedDefaultParameter.html)

---

### Rename Method

**Tags:** method calls

The name of a method does not reveal its purpose.

Change the name of the method.

[more…](https://refactoring.com/catalog/renameMethod.html)

---

### Replace Abstract Superclass with Module

**Tags:** inheritance

You have an inheritance hierarchy, but never intend to explicitly instantiate an instance of the superclass.

Replace the superclass with a module to better communicate your intention.

[more…](https://refactoring.com/catalog/replaceAbstractSuperclassWithModule.html)

---

### Replace Array with Object

**Tags:** generic types, organizing data

You have an array in which certain elements mean different things.

Replace the array with an object that has a field for each element.

[more…](https://refactoring.com/catalog/replaceArrayWithObject.html)

---

### Replace Conditional with Polymorphism

**Tags:** inheritance, conditionals

You have a conditional that chooses different behavior depending on the type of an object.

Move each leg of the conditional to an overriding method in a subclass. Make the original method abstract.

[more…](https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html)

---

### Replace Constructor with Factory Method

**Tags:** interfaces, method calls

You want to do more than simple construction when you create an object.

Replace the constructor with a factory method.

[more…](https://refactoring.com/catalog/replaceConstructorWithFactoryMethod.html)

---

### Replace Data Value with Object

**Tags:** generic types, organizing data

You have a data item that needs additional data or behavior.

Turn the data item into an object.

[more…](https://refactoring.com/catalog/replaceDataValueWithObject.html)

---

### Replace Delegation With Hierarchy

**Tags:** associations, inheritance

You’re using delegation and are often writing many simple delegations for the entire interface

Make the delegate a module and include it into the delegating class.

[more…](https://refactoring.com/catalog/replaceDelegationWithHierarchy.html)

---

### Replace Delegation with Inheritance

**Tags:** associations, inheritance

You're using delegation and are often writing many simple delegations for the entire interface.

Make the delegating class a subclass of the delegate.

[more…](https://refactoring.com/catalog/replaceDelegationWithInheritance.html)

---

### Replace Dynamic Receptor with Dynamic Method Definition

**Tags:** defining methods

You have methods you want to handle dynamically without the pain of debug- gingmethod_missing.

Use dynamic method definition to define the necessary methods.

[more…](https://refactoring.com/catalog/replaceDynamicReceptorWithDynamicMethodDefinition.html)

---

### Replace Error Code with Exception

**Tags:** errors, method calls

A method returns a special code to indicate an error.

Throw an exception instead.

[more…](https://refactoring.com/catalog/replaceErrorCodeWithException.html)

---

### Replace Exception with Test

**Tags:** errors, method calls, conditionals

You are throwing an exception on a condition the caller could have checked first.

Change the caller to make the test first.

[more…](https://refactoring.com/catalog/replaceExceptionWithTest.html)

---

### Replace Hash with Object

**Tags:** generic types

You have a hash that stores several different types of objects, and is passed around and used for more than one purpose.

Replace the hash with an object that has a field for each key

[more…](https://refactoring.com/catalog/replaceHashWithObject.html)

---

### Replace Inheritance with Delegation

**Tags:** associations, inheritance

A subclass uses only part of a superclasses interface or does not want to inherit data.

Create a field for the superclass, adjust methods to delegate to the superclass, and remove the subclassing.

[more…](https://refactoring.com/catalog/replaceInheritanceWithDelegation.html)

---

### Replace Loop with Collection Closure Method

**Tags:** composing methods

You are processing the elements of a collection in a loop.

Replace the loop with a collection closure method.

[more…](https://refactoring.com/catalog/replaceLoopWithCollectionClosureMethod.html)

---

### Replace Magic Number with Symbolic Constant

**Tags:** generic types, organizing data

You have a literal number with a particular meaning.

Create a constant, name it after the meaning, and replace the number with it.

[more…](https://refactoring.com/catalog/replaceMagicNumberWithSymbolicConstant.html)

---

### Replace Method with Method Object

**Tags:** associations, local variables, composing methods, defining methods

You have a long method that uses local variables in such a way that you cannot apply

Turn the method into its own object so that all the local variables become fields on that object. You can then decompose the method into other methods on the same object.

[more…](https://refactoring.com/catalog/replaceMethodWithMethodObject.html)

---

### Replace Nested Conditional with Guard Clauses

**Tags:** conditionals

A method has conditional behavior that does not make clear what the normal path of execution is

Use Guard Clauses for all the special cases

[more…](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)

---

### Replace Parameter with Explicit Methods

**Tags:** method calls

You have a method that runs different code depending on the values of an enumerated parameter.

Create a separate method for each value of the parameter.

[more…](https://refactoring.com/catalog/replaceParameterWithExplicitMethods.html)

---

### Replace Parameter with Method

**Tags:** method calls

An object invokes a method, then passes the result as a parameter for a method. The receiver can also invoke this method.

Remove the parameter and let the receiver invoke the method.

[more…](https://refactoring.com/catalog/replaceParameterWithMethod.html)

---

### Replace Record with Data Class

**Tags:** generic types, organizing data

You need to interface with a record structure in a traditional programming environment.

Make a dumb data object for the record.

[more…](https://refactoring.com/catalog/replaceRecordWithDataClass.html)

---

### Replace Subclass with Fields

**Tags:** organizing data, inheritance

You have subclasses that vary only in methods that return constant data.

Change the methods to superclass fields and eliminate the subclasses.

[more…](https://refactoring.com/catalog/replaceSubclassWithFields.html)

---

### Replace Temp with Chain

**Tags:** local variables

You are using a temporary variable to hold the result of an expression

Change the methods to support chaining, thus removing the need for a temp.

[more…](https://refactoring.com/catalog/replaceTempWithChain.html)

---

### Replace Temp with Query

**Tags:** local variables, composing methods

You are using a temporary variable to hold the result of an expression.

Extract the expression into a method. Replace all references to the temp with the expression. The new method can then be used in other methods.

[more…](https://refactoring.com/catalog/replaceTempWithQuery.html)

---

### Replace Type Code with Class

**Tags:** type codes, organizing data

A class has a numeric type code that does not affect its behavior.

Replace the number with a new class.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithClass.html)

---

### Replace Type Code with Module Extension

**Tags:** type codes

You have a type code that affects the behavior of a class.

Replace the type code with dynamic module extension.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithModuleExtension.html)

---

### Replace Type Code With Polymorphism

**Tags:** type codes

You have a type code that affects the behavior of a class.

Replace the type code with classes: one for each type code variant.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithPolymorphism.html)

---

### Replace Type Code with State/Strategy

**Tags:** GOF Patterns, type codes, organizing data

You have a type code that affects the behavior of a class, but you cannot use subclassing.

Replace the type code with a state object.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithStateStrategy.html)

---

### Replace Type Code with Subclasses

**Tags:** type codes, organizing data, inheritance

You have an immutable type code that affects the behavior of a class.

Replace the type code with subclasses.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithSubclasses.html)

---

### Self Encapsulate Field

**Tags:** encapsulation, organizing data

You are accessing a field directly, but the coupling to the field is becoming awkward.

Create getting and setting methods for the field and use only those to access the field.

[more…](https://refactoring.com/catalog/selfEncapsulateField.html)

---

### Separate Query from Modifier

**Tags:** method calls

You have a method that returns a value but also changes the state of an object.

Create two methods, one for the query and one for the modification.

[more…](https://refactoring.com/catalog/separateQueryFromModifier.html)

---

### Split Temporary Variable

**Tags:** local variables, composing methods

You have a temporary variable assigned to more than once, but is not a loop variable nor a collecting temporary variable.

Make a separate temporary variable for each assignment.

[more…](https://refactoring.com/catalog/splitTemporaryVariable.html)

---

### Substitute Algorithm

**Tags:** composing methods

You want to replace an algorithm with one that is clearer.

Replace the body of the method with the new algorithm.

[more…](https://refactoring.com/catalog/substituteAlgorithm.html)
