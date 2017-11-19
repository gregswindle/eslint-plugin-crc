> Fowler, M. (2013, December 10). Catalog of Refactorings. Retrieved November 18, 2017, from https://refactoring.com/catalog/

## Table of contents

<!-- toc -->

1. [Add Parameter](#add-parameter)
1. [Change Bidirectional Association to Unidirectional](#change-bidirectional-association-to-unidirectional)
1. [Change Reference to Value](#change-reference-to-value)
1. [Change Unidirectional Association to Bidirectional](#change-unidirectional-association-to-bidirectional)
1. [Change Value to Reference](#change-value-to-reference)
1. [Collapse Hierarchy](#collapse-hierarchy)
1. [Consolidate Conditional Expression](#consolidate-conditional-expression)
1. [Consolidate Duplicate Conditional Fragments](#consolidate-duplicate-conditional-fragments)
1. [Decompose Conditional](#decompose-conditional)
1. [Duplicate Observed Data](#duplicate-observed-data)
1. [Dynamic Method Definition](#dynamic-method-definition)
1. [Eagerly Initialized Attribute](#eagerly-initialized-attribute)
1. [Encapsulate Collection](#encapsulate-collection)
1. [Encapsulate Downcast](#encapsulate-downcast)
1. [Encapsulate Field](#encapsulate-field)
1. [Extract Class](#extract-class)
1. [Extract Interface](#extract-interface)
1. [Extract Method](#extract-method)
1. [Extract Module](#extract-module)
1. [Extract Subclass](#extract-subclass)
1. [Extract Superclass](#extract-superclass)
1. [Extract Surrounding Method](#extract-surrounding-method)
1. [Extract Variable](#extract-variable)
1. [Form Template Method](#form-template-method)
1. [Hide Delegate](#hide-delegate)
1. [Hide Method](#hide-method)
1. [Inline Class](#inline-class)
1. [Inline Method](#inline-method)
1. [Inline Module](#inline-module)
1. [Inline Temp](#inline-temp)
1. [Introduce Assertion](#introduce-assertion)
1. [Introduce Class Annotation](#introduce-class-annotation)
1. [Introduce Expression Builder](#introduce-expression-builder)
1. [Introduce Foreign Method](#introduce-foreign-method)
1. [Introduce Gateway](#introduce-gateway)
1. [Introduce Local Extension](#introduce-local-extension)
1. [Introduce Named Parameter](#introduce-named-parameter)
1. [Introduce Null Object](#introduce-null-object)
1. [Introduce Parameter Object](#introduce-parameter-object)
1. [Isolate Dynamic Receptor](#isolate-dynamic-receptor)
1. [Lazily Initialized Attribute](#lazily-initialized-attribute)
1. [Move Eval from Runtime to Parse Time](#move-eval-from-runtime-to-parse-time)
1. [Move Field](#move-field)
1. [Move Method](#move-method)
1. [Parameterize Method](#parameterize-method)
1. [Preserve Whole Object](#preserve-whole-object)
1. [Pull Up Constructor Body](#pull-up-constructor-body)
1. [Pull Up Field](#pull-up-field)
1. [Pull Up Method](#pull-up-method)
1. [Push Down Field](#push-down-field)
1. [Push Down Method](#push-down-method)
1. [Recompose Conditional](#recompose-conditional)
1. [Remove Assignments to Parameters](#remove-assignments-to-parameters)
1. [Remove Control Flag](#remove-control-flag)
1. [Remove Middle Man](#remove-middle-man)
1. [Remove Named Parameter](#remove-named-parameter)
1. [Remove Parameter](#remove-parameter)
1. [Remove Setting Method](#remove-setting-method)
1. [Remove Unused Default Parameter](#remove-unused-default-parameter)
1. [Rename Method](#rename-method)
1. [Replace Abstract Superclass with Module](#replace-abstract-superclass-with-module)
1. [Replace Array with Object](#replace-array-with-object)
1. [Replace Conditional with Polymorphism](#replace-conditional-with-polymorphism)
1. [Replace Constructor with Factory Method](#replace-constructor-with-factory-method)
1. [Replace Data Value with Object](#replace-data-value-with-object)
1. [Replace Delegation With Hierarchy](#replace-delegation-with-hierarchy)
1. [Replace Delegation with Inheritance](#replace-delegation-with-inheritance)
1. [Replace Dynamic Receptor with Dynamic Method Definition](#replace-dynamic-receptor-with-dynamic-method-definition)
1. [Replace Error Code with Exception](#replace-error-code-with-exception)
1. [Replace Exception with Test](#replace-exception-with-test)
1. [Replace Hash with Object](#replace-hash-with-object)
1. [Replace Inheritance with Delegation](#replace-inheritance-with-delegation)
1. [Replace Loop with Collection Closure Method](#replace-loop-with-collection-closure-method)
1. [Replace Magic Number with Symbolic Constant](#replace-magic-number-with-symbolic-constant)
1. [Replace Method with Method Object](#replace-method-with-method-object)
1. [Replace Nested Conditional with Guard Clauses](#replace-nested-conditional-with-guard-clauses)
1. [Replace Parameter with Explicit Methods](#replace-parameter-with-explicit-methods)
1. [Replace Parameter with Method](#replace-parameter-with-method)
1. [Replace Record with Data Class](#replace-record-with-data-class)
1. [Replace Subclass with Fields](#replace-subclass-with-fields)
1. [Replace Temp with Chain](#replace-temp-with-chain)
1. [Replace Temp with Query](#replace-temp-with-query)
1. [Replace Type Code with Class](#replace-type-code-with-class)
1. [Replace Type Code with Module Extension](#replace-type-code-with-module-extension)
1. [Replace Type Code With Polymorphism](#replace-type-code-with-polymorphism)
1. [Replace Type Code with State/Strategy](#replace-type-code-with-statestrategy)
1. [Replace Type Code with Subclasses](#replace-type-code-with-subclasses)
1. [Self Encapsulate Field](#self-encapsulate-field)
1. [Separate Query from Modifier](#separate-query-from-modifier)
1. [Split Temporary Variable](#split-temporary-variable)
1. [Substitute Algorithm](#substitute-algorithm)

<!-- tocstop -->

<!-- tocend -->

---

## Add Parameter

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

A method needs more information from its caller.

### Solution

Add a parameter for an object that can pass on this information.

[more…](https://refactoring.com/catalog/addParameter.html)

---

## Change Bidirectional Association to Unidirectional

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have a two-way association but one class no longer needs features from the other.

### Solution

Drop the unneeded end of the association.

[more…](https://refactoring.com/catalog/changeBidirectionalAssociationToUnidirectional.html)

---

## Change Reference to Value

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have a reference object that is small, immutable, and awkward to manage.

### Solution

Turn it into a value object.

[more…](https://refactoring.com/catalog/changeReferenceToValue.html)

---

## Change Unidirectional Association to Bidirectional

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have two classes that need to use each other's features, but there is only a one-way link.

### Solution

Add back pointers, and change modifiers to update both sets.

[more…](https://refactoring.com/catalog/changeUnidirectionalAssociationToBidirectional.html)

---

## Change Value to Reference

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have a class with many equal instances that you want to replace with a single object.

### Solution

Turn the object into a reference object.

[more…](https://refactoring.com/catalog/changeValueToReference.html)

---

## Collapse Hierarchy

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

A superclass and subclass are not very different.

### Solution

Merge them together.

[more…](https://refactoring.com/catalog/collapseHierarchy.html)

---

## Consolidate Conditional Expression

**Categories:** <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have a sequence of conditional tests with the same result.

### Solution

Combine them into a single conditional expression and extract it.

[more…](https://refactoring.com/catalog/consolidateConditionalExpression.html)

---

## Consolidate Duplicate Conditional Fragments

**Categories:** <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

The same fragment of code is in all branches of a conditional expression.

### Solution

Move it outside of the expression.

[more…](https://refactoring.com/catalog/consolidateDuplicateConditionalFragments.html)

---

## Decompose Conditional

**Categories:** <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have a complicated conditional (if-then-else) statement.

### Solution

Extract methods from the condition, then part, and else parts.

[more…](https://refactoring.com/catalog/decomposeConditional.html)

---

## Duplicate Observed Data

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have domain data available only in a GUI control, and domain methods need access.

### Solution

Copy the data to a domain object. Set up an observer to synchronize the two pieces of data.

[more…](https://refactoring.com/catalog/duplicateObservedData.html)

---

## Dynamic Method Definition

**Categories:** <kbd>[defining methods](Refactorings-by-category#defining-methods)</kbd>

### Problem

You have methods that can be defined more concisely if defined dynamically.

### Solution

Define the methods dynamically.

[more…](https://refactoring.com/catalog/dynamicMethodDefinition.html)

---

## Eagerly Initialized Attribute

**Categories:** <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

Lazily initialization is causing more confusion than benefit

### Solution

Initialize the attribute when you instantiate the object

[more…](https://refactoring.com/catalog/eagerlyInitializedAttribute.html)

---

## Encapsulate Collection

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

A method returns a collection.

### Solution

Make it return a read-only view and provide add/remove methods.

[more…](https://refactoring.com/catalog/encapsulateCollection.html)

---

## Encapsulate Downcast

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

A method returns an object that needs to be downcasted by its callers.

### Solution

Move the downcast to within the method.

[more…](https://refactoring.com/catalog/encapsulateDowncast.html)

---

## Encapsulate Field

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

There is a public field.

### Solution

Make it private and provide accessors.

[more…](https://refactoring.com/catalog/encapsulateField.html)

---

## Extract Class

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[class extraction](Refactorings-by-category#class-extraction)</kbd> , <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

You have one class doing work that should be done by two.

### Solution

Create a new class and move the relevant fields and methods from the old class into the new class.

[more…](https://refactoring.com/catalog/extractClass.html)

---

## Extract Interface

**Categories:** <kbd>[interfaces](Refactorings-by-category#interfaces)</kbd> , <kbd>[class extraction](Refactorings-by-category#class-extraction)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

Several clients use the same subset of a class's interface, or two classes have part of their <kbd>[interfaces](Refactorings-by-category#interfaces)</kbd>  in common.

### Solution

Extract the subset into an interface.

[more…](https://refactoring.com/catalog/extractInterface.html)

---

## Extract Method

**Categories:** <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have a code fragment that can be grouped together.

### Solution

Turn the fragment into a method whose name explains the purpose of the method.

[more…](https://refactoring.com/catalog/extractMethod.html)

---

## Extract Module

**Categories:** <kbd>[class extraction](Refactorings-by-category#class-extraction)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd> , <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

You have duplicated behavior in two or more classes.

### Solution

You have duplicated behavior in two or more classes.

[more…](https://refactoring.com/catalog/extractModule.html)

---

## Extract Subclass

**Categories:** <kbd>[class extraction](Refactorings-by-category#class-extraction)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

A class has features that are used only in some instances.

### Solution

Create a subclass for that subset of features.

[more…](https://refactoring.com/catalog/extractSubclass.html)

---

## Extract Superclass

**Categories:** <kbd>[class extraction](Refactorings-by-category#class-extraction)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You have two classes with similar features.

### Solution

Create a superclass and move the common features to the superclass.

[more…](https://refactoring.com/catalog/extractSuperclass.html)

---

## Extract Surrounding Method

**Categories:** <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have two methods that contain nearly identical code. The variance is in the middle of the method.

### Solution

Extract the duplication into a method that accepts a block and yields back to the caller to execute the unique code.

[more…](https://refactoring.com/catalog/extractSurroundingMethod.html)

---

## Extract Variable

**Categories:** <kbd>[local variables](Refactorings-by-category#local-variables)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have a complicated expression.

### Solution

Put the result of the expression, or parts of the expression, in a temporary variable with a name that explains the purpose.

[more…](https://refactoring.com/catalog/extractVariable.html)

---

## Form Template Method

**Categories:** <kbd>[GOF Patterns](Refactorings-by-category#GOF-Patterns)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have two methods in subclasses that perform similar steps in the same order, yet the steps are different.

### Solution

Get the steps into methods with the same signature, so that the original methods become the same. Then you can pull them up.

[more…](https://refactoring.com/catalog/formTemplateMethod.html)

---

## Hide Delegate

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

A client is calling a delegate class of an object.

### Solution

Create methods on the server to hide the delegate.

[more…](https://refactoring.com/catalog/hideDelegate.html)

---

## Hide Method

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

A method is not used by any other class.

### Solution

Make the method private.

[more…](https://refactoring.com/catalog/hideMethod.html)

---

## Inline Class

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

A class isn't doing very much.

### Solution

Move all its features into another class and delete it.

[more…](https://refactoring.com/catalog/inlineClass.html)

---

## Inline Method

**Categories:** <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

A method's body is just as clear as its name.

### Solution

Put the method's body into the body of its callers and remove the method.

[more…](https://refactoring.com/catalog/inlineMethod.html)

---

## Inline Module

**Categories:** <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

The resultant indirection of the included module is no longer worth the duplica- tion it is preventing.

### Solution

Merge the module into the including class.

[more…](https://refactoring.com/catalog/inlineModule.html)

---

## Inline Temp

**Categories:** <kbd>[local variables](Refactorings-by-category#local-variables)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have a temp that is assigned to once with a simple expression, and the temp is getting in the way of other refactorings.

### Solution

Replace all references to that temp with the expression.

[more…](https://refactoring.com/catalog/inlineTemp.html)

---

## Introduce Assertion

**Categories:** <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

A section of code assumes something about the state of the program.

### Solution

Make the assumption explicit with an assertion.

[more…](https://refactoring.com/catalog/introduceAssertion.html)

---

## Introduce Class Annotation

**Categories:** <kbd>[defining methods](Refactorings-by-category#defining-methods)</kbd>

### Problem

You have a method whose implementation steps are so common that they can safely be hidden away.

### Solution

Declare the behavior by calling a class method from the class definition.

[more…](https://refactoring.com/catalog/introduceClassAnnotation.html)

---

## Introduce Expression Builder

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

You want to interact with a public interface in a more fluent manner and not muddy the interface of an existing object.

### Solution

Introduce an Expression Builder and create an interface specific to your application.

[more…](https://refactoring.com/catalog/introduceExpressionBuilder.html)

---

## Introduce Foreign Method

**Categories:** <kbd>[vendor libraries](Refactorings-by-category#vendor-libraries)</kbd> , <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

A server class you are using needs an additional method, but you can't modify the class.

### Solution

Create a method in the client class with an instance of the server class as its first argument.

[more…](https://refactoring.com/catalog/introduceForeignMethod.html)

---

## Introduce Gateway

**Categories:** <kbd>[vendor libraries](Refactorings-by-category#vendor-libraries)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

You want to interact with a complex API of an external system or resource in a simplified way

### Solution

Introduce a Gateway that encapsulates access to an external system or resource

[more…](https://refactoring.com/catalog/introduceGateway.html)

---

## Introduce Local Extension

**Categories:** <kbd>[vendor libraries](Refactorings-by-category#vendor-libraries)</kbd> , <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

A server class you are using needs several additional methods, but you can't modify the class.

### Solution

Create a new class that contains these extra methods. Make this extension class a subclass or a wrapper of the original.

[more…](https://refactoring.com/catalog/introduceLocalExtension.html)

---

## Introduce Named Parameter

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

The parameters in a method call cannot easily be deduced from the name of the method you are calling.

### Solution

Convert the parameter list into a Hash, and use the keys of the Hash as names for the parameters.

[more…](https://refactoring.com/catalog/introduceNamedParameter.html)

---

## Introduce Null Object

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd> , <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

You have repeated checks for a null value.

### Solution

Replace the null value with a null object.

[more…](https://refactoring.com/catalog/introduceNullObject.html)

---

## Introduce Parameter Object

**Categories:** <kbd>[class extraction](Refactorings-by-category#class-extraction)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

You have a group of parameters that naturally go together.

### Solution

Replace them with an object.

[more…](https://refactoring.com/catalog/introduceParameterObject.html)

---

## Isolate Dynamic Receptor

**Categories:** <kbd>[defining methods](Refactorings-by-category#defining-methods)</kbd>

### Problem

A class utilizing method_missing has become painful to alter.

### Solution

Introduce a new class and move the method_missing logic to that class.

[more…](https://refactoring.com/catalog/isolateDynamicReceptor.html)

---

## Lazily Initialized Attribute

**Categories:** <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

An attribute takes time to initialize but is only accessed rarely

### Solution

Initialize when it's first used

[more…](https://refactoring.com/catalog/lazilyInitializedAttribute.html)

---

## Move Eval from Runtime to Parse Time

**Categories:** <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You need to use eval but want to limit the number of times eval is necessary.

### Solution

Move the use of eval from within the method definition to defining the method itself.

[more…](https://refactoring.com/catalog/moveEvalFromRuntimeToParseTime.html)

---

## Move Field

**Categories:** <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

A field is, or will be, used by another class more than the class on which it is defined.

### Solution

Create a new field in the target class, and change all its users.

[more…](https://refactoring.com/catalog/moveField.html)

---

## Move Method

**Categories:** <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

A method is, or will be, using or used by more features of another class than the class on which it is defined.

### Solution

Create a new method with a similar body in the class it uses most. Either turn the old method into a simple delegation, or remove it altogether.

[more…](https://refactoring.com/catalog/moveMethod.html)

---

## Parameterize Method

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

Several methods do similar things but with different values contained in the method body.

### Solution

Create one method that uses a parameter for the different values.

[more…](https://refactoring.com/catalog/parameterizeMethod.html)

---

## Preserve Whole Object

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

You are getting several values from an object and passing these values as parameters in a method call.

### Solution

Send the whole object instead.

[more…](https://refactoring.com/catalog/preserveWholeObject.html)


<div class="right">

---

## Pull Up Constructor Body

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You have constructors on subclasses with mostly identical bodies.

### Solution

Create a superclass constructor; call this from the subclass methods.

[more…](https://refactoring.com/catalog/pullUpConstructorBody.html)

---

## Pull Up Field

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

Two subclasses have the same field.

### Solution

Move the field to the superclass.

[more…](https://refactoring.com/catalog/pullUpField.html)

---

## Pull Up Method

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You have methods with identical results on subclasses.

### Solution

Move them to the superclass.

[more…](https://refactoring.com/catalog/pullUpMethod.html)

---

## Push Down Field

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

A field is used only by some subclasses.

### Solution

Move the field to those subclasses.

[more…](https://refactoring.com/catalog/pushDownField.html)

---

## Push Down Method

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

Behavior on a superclass is relevant only for some of its subclasses.

### Solution

Move it to those subclasses.

[more…](https://refactoring.com/catalog/pushDownMethod.html)

---

## Recompose Conditional

**Categories:** <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

You have conditional code that is unnecessarily verbose and does not use the most readable Ruby construct.

### Solution

Replace the conditional code with the more idiomatic Ruby construct.

[more…](https://refactoring.com/catalog/recomposeConditional.html)

---

## Remove Assignments to Parameters

**Categories:** <kbd>[local variables](Refactorings-by-category#local-variables)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

The code assigns to a parameter.

### Solution

Use a temporary variable instead.

[more…](https://refactoring.com/catalog/removeAssignmentsToParameters.html)

---

## Remove Control Flag

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd> , <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

You have a variable that is acting as a control flag for a series of boolean expressions.

### Solution

Use a break or return instead.

[more…](https://refactoring.com/catalog/removeControlFlag.html)

---

## Remove Middle Man

**Categories:** <kbd>[moving features](Refactorings-by-category#moving-features)</kbd>

### Problem

A class is doing too much simple delegation.

### Solution

Get the client to call the delegate directly.

[more…](https://refactoring.com/catalog/removeMiddleMan.html)

---

## Remove Named Parameter

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

The fluency that the named parameter brings is no longer worth the complexity on the receiver.

### Solution

Convert the named parameter Hash to a standard parameter list.

[more…](https://refactoring.com/catalog/removeNamedParameter.html)

---

## Remove Parameter

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

A parameter is no longer used by the method body.

### Solution

Remove it.

[more…](https://refactoring.com/catalog/removeParameter.html)

---

## Remove Setting Method

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

A field should be set at creation time and never altered.

### Solution

Remove any setting method for that field.

[more…](https://refactoring.com/catalog/removeSettingMethod.html)

---

## Remove Unused Default Parameter

**Categories:** <kbd>[defining methods](Refactorings-by-category#defining-methods)</kbd>

### Problem

A parameter has a default value, but the method is never called without the parameter.

### Solution

Remove the default value

[more…](https://refactoring.com/catalog/removeUnusedDefaultParameter.html)

---

## Rename Method

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

The name of a method does not reveal its purpose.

### Solution

Change the name of the method.

[more…](https://refactoring.com/catalog/renameMethod.html)

---

## Replace Abstract Superclass with Module

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You have an <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>  hierarchy, but never intend to explicitly instantiate an instance of the superclass.

### Solution

Replace the superclass with a module to better communicate your intention.

[more…](https://refactoring.com/catalog/replaceAbstractSuperclassWithModule.html)

---

## Replace Array with Object

**Categories:** <kbd>[generic types](Refactorings-by-category#generic-types)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have an array in which certain elements mean different things.

### Solution

Replace the array with an object that has a field for each element.

[more…](https://refactoring.com/catalog/replaceArrayWithObject.html)

---

## Replace Conditional with Polymorphism

**Categories:** <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd> , <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

You have a conditional that chooses different behavior depending on the type of an object.

### Solution

Move each leg of the conditional to an overriding method in a subclass. Make the original method abstract.

[more…](https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html)

---

## Replace Constructor with Factory Method

**Categories:** <kbd>[interfaces](Refactorings-by-category#interfaces)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

You want to do more than simple construction when you create an object.

### Solution

Replace the constructor with a factory method.

[more…](https://refactoring.com/catalog/replaceConstructorWithFactoryMethod.html)

---

## Replace Data Value with Object

**Categories:** <kbd>[generic types](Refactorings-by-category#generic-types)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have a data item that needs additional data or behavior.

### Solution

Turn the data item into an object.

[more…](https://refactoring.com/catalog/replaceDataValueWithObject.html)

---

## Replace Delegation With Hierarchy

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You’re using delegation and are often writing many simple delegations for the entire interface

### Solution

Make the delegate a module and include it into the delegating class.

[more…](https://refactoring.com/catalog/replaceDelegationWithHierarchy.html)

---

## Replace Delegation with Inheritance</kbd>

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You're using delegation and are often writing many simple delegations for the entire interface.

### Solution

Make the delegating class a subclass of the delegate.

[more…](https://refactoring.com/catalog/replaceDelegationWithInheritance.html)

---

## Replace Dynamic Receptor with Dynamic Method Definition

**Categories:** <kbd>[defining methods](Refactorings-by-category#defining-methods)</kbd>

### Problem

You have methods you want to handle dynamically without the pain of debug- gingmethod_missing.

### Solution

Use dynamic method definition to define the necessary methods.

[more…](https://refactoring.com/catalog/replaceDynamicReceptorWithDynamicMethodDefinition.html)

---

## Replace Error Code with Exception

**Categories:** <kbd>[errors](Refactorings-by-category#errors)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

A method returns a special code to indicate an error.

### Solution

Throw an exception instead.

[more…](https://refactoring.com/catalog/replaceErrorCodeWithException.html)

---

## Replace Exception with Test

**Categories:** <kbd>[errors](Refactorings-by-category#errors)</kbd> , <kbd>[method calls](Refactorings-by-category#method-calls)</kbd> , <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

You are throwing an exception on a condition the caller could have checked first.

### Solution

Change the caller to make the test first.

[more…](https://refactoring.com/catalog/replaceExceptionWithTest.html)

---

## Replace Hash with Object

**Categories:** <kbd>[generic types](Refactorings-by-category#generic-types)</kbd>

### Problem

You have a hash that stores several different types of objects, and is passed around and used for more than one purpose.

### Solution

Replace the hash with an object that has a field for each key

[more…](https://refactoring.com/catalog/replaceHashWithObject.html)

---

## Replace Inheritance with Delegation

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

A subclass uses only part of a superclasses interface or does not want to inherit data.

### Solution

Create a field for the superclass, adjust methods to delegate to the superclass, and remove the subclassing.

[more…](https://refactoring.com/catalog/replaceInheritanceWithDelegation.html)

---

## Replace Loop with Collection Closure Method

**Categories:** <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You are processing the elements of a collection in a loop.

### Solution

Replace the loop with a collection closure method.

[more…](https://refactoring.com/catalog/replaceLoopWithCollectionClosureMethod.html)

---

## Replace Magic Number with Symbolic Constant

**Categories:** <kbd>[generic types](Refactorings-by-category#generic-types)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have a literal number with a particular meaning.

### Solution

Create a constant, name it after the meaning, and replace the number with it.

[more…](https://refactoring.com/catalog/replaceMagicNumberWithSymbolicConstant.html)

---

## Replace Method with Method Object

**Categories:** <kbd>[associations](Refactorings-by-category#associations)</kbd> , <kbd>[local variables](Refactorings-by-category#local-variables)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd> , <kbd>[defining methods](Refactorings-by-category#defining-methods)</kbd>

### Problem

You have a long method that uses <kbd>[local variables](Refactorings-by-category#local-variables)</kbd>  in such a way that you cannot apply

### Solution

Turn the method into its own object so that all the <kbd>[local variables](Refactorings-by-category#local-variables)</kbd>  become fields on that object. You can then decompose the method into other methods on the same object.

[more…](https://refactoring.com/catalog/replaceMethodWithMethodObject.html)

---

## Replace Nested Conditional with Guard Clauses

**Categories:** <kbd>[conditionals](Refactorings-by-category#conditionals)</kbd>

### Problem

A method has conditional behavior that does not make clear what the normal path of execution is

### Solution

Use Guard Clauses for all the special cases

[more…](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html)

---

## Replace Parameter with Explicit Methods

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

You have a method that runs different code depending on the values of an enumerated parameter.

### Solution

Create a separate method for each value of the parameter.

[more…](https://refactoring.com/catalog/replaceParameterWithExplicitMethods.html)

---

## Replace Parameter with Method

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

An object invokes a method, then passes the result as a parameter for a method. The receiver can also invoke this method.

### Solution

Remove the parameter and let the receiver invoke the method.

[more…](https://refactoring.com/catalog/replaceParameterWithMethod.html)

---

## Replace Record with Data Class

**Categories:** <kbd>[generic types](Refactorings-by-category#generic-types)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You need to interface with a record structure in a traditional programming environment.

### Solution

Make a dumb data object for the record.

[more…](https://refactoring.com/catalog/replaceRecordWithDataClass.html)

---

## Replace Subclass with Fields

**Categories:** <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You have subclasses that vary only in methods that return constant data.

### Solution

Change the methods to superclass fields and eliminate the subclasses.

[more…](https://refactoring.com/catalog/replaceSubclassWithFields.html)

---

## Replace Temp with Chain

**Categories:** <kbd>[local variables](Refactorings-by-category#local-variables)</kbd>

### Problem

You are using a temporary variable to hold the result of an expression

### Solution

Change the methods to support chaining, thus removing the need for a temp.

[more…](https://refactoring.com/catalog/replaceTempWithChain.html)

---

## Replace Temp with Query

**Categories:** <kbd>[local variables](Refactorings-by-category#local-variables)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You are using a temporary variable to hold the result of an expression.

### Solution

Extract the expression into a method. Replace all references to the temp with the expression. The new method can then be used in other methods.

[more…](https://refactoring.com/catalog/replaceTempWithQuery.html)

---

## Replace Type Code with Class

**Categories:** <kbd>[type codes](Refactorings-by-category#type-codes)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

A class has a numeric type code that does not affect its behavior.

### Solution

Replace the number with a new class.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithClass.html)

---

## Replace Type Code with Module Extension

**Categories:** <kbd>[type codes](Refactorings-by-category#type-codes)</kbd>

### Problem

You have a type code that affects the behavior of a class.

### Solution

Replace the type code with dynamic module extension.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithModuleExtension.html)

---

## Replace Type Code With Polymorphism

**Categories:** <kbd>[type codes](Refactorings-by-category#type-codes)</kbd>

### Problem

You have a type code that affects the behavior of a class.

### Solution

Replace the type code with classes: one for each type code variant.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithPolymorphism.html)

---

## Replace Type Code with State/Strategy

**Categories:** <kbd>[GOF Patterns](Refactorings-by-category#GOF-Patterns)</kbd> , <kbd>[type codes](Refactorings-by-category#type-codes)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You have a type code that affects the behavior of a class, but you cannot use subclassing.

### Solution

Replace the type code with a state object.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithStateStrategy.html)

---

## Replace Type Code with Subclasses

**Categories:** <kbd>[type codes](Refactorings-by-category#type-codes)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd> , <kbd>[inheritance](Refactorings-by-category#inheritance)</kbd>

### Problem

You have an immutable type code that affects the behavior of a class.

### Solution

Replace the type code with subclasses.

[more…](https://refactoring.com/catalog/replaceTypeCodeWithSubclasses.html)

---

## Self Encapsulate Field

**Categories:** <kbd>[encapsulation](Refactorings-by-category#encapsulation)</kbd> , <kbd>[organizing data](Refactorings-by-category#organizing-data)</kbd>

### Problem

You are accessing a field directly, but the coupling to the field is becoming awkward.

### Solution

Create getting and setting methods for the field and use only those to access the field.

[more…](https://refactoring.com/catalog/selfEncapsulateField.html)

---

## Separate Query from Modifier

**Categories:** <kbd>[method calls](Refactorings-by-category#method-calls)</kbd>

### Problem

You have a method that returns a value but also changes the state of an object.

### Solution

Create two methods, one for the query and one for the modification.

[more…](https://refactoring.com/catalog/separateQueryFromModifier.html)

---

## Split Temporary Variable

**Categories:** <kbd>[local variables](Refactorings-by-category#local-variables)</kbd> , <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You have a temporary variable assigned to more than once, but is not a loop variable nor a collecting temporary variable.

### Solution

Make a separate temporary variable for each assignment.

[more…](https://refactoring.com/catalog/splitTemporaryVariable.html)

---

## Substitute Algorithm

**Categories:** <kbd>[composing methods](Refactorings-by-category#composing-methods)</kbd>

### Problem

You want to replace an algorithm with one that is clearer.

### Solution

Replace the body of the method with the new algorithm.

[more…](https://refactoring.com/catalog/substituteAlgorithm.html)
