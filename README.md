## Domain Object Reactive Forms
Angular 2 gives a great support for creating [Reactive Forms](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html), which are sometimes called also _Dynamic_ or _Model-driven Forms_.

This library is about taking _Reactive Forms_ to the next level by coupling them with _Domain Objects_.

### Explore the library using its [wiki](https://github.com/mat3e/dorf/wiki)

### Want to create a form field for object's property?
1. Create  `DorfFieldDefinition` which contains info about a label, validators and more (e.g. type of the input field).
    ```typescript
    get nameDefinition(): DorfInputDefinition<string> {
        return {
            label: "Name",
            validator: Validators.required,
            type: "text"
        };
    }
    ```

2. Create _Component_ which extends `AbstractDorfDetailsComponent` and uses a template similar to _dorf-details.view.html_ from the library (or even directly _dorf-details.view.html_).
    ```typescript
    @Component({
        templateUrl: "../../dorf/dorf-details.view.html"
    })
    export class ExampleComponent extends AbstractDorfDetailsComponent<ExampleModel> implements OnInit { 
	    /* ... */
		constructor(config: DorfService) {
            super(config);
        }
	    /* ... */
	}
    ```

3. Inside your _Component_ override `getDomainObject` method for returning a domain object:
    ```typescript
    protected getDomainObject(): ExampleModel {
        return this.model;
    }
    ```
and `getFieldDefinitions` method for returning _propertyName-fieldDefinition_ map for your object:
    ```typescript
    protected getFieldDefinitions(): PropertiesToDorfDefinitionsMap<ExampleModel> {
        return {
            "name": this.model.nameDefinition
        }
    }
    ```

4. Call `super.ngOnInit();` inside your Component's `ngOnInit` method.

5. You are done! Enjoy your _Reactive Form_.
