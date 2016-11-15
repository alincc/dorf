import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from "@angular/core";
import { PropertiesToDorfDefinitionsMap, AbstractDorfDetailsComponent, DorfService } from "dorf";

import { IPerson, Person } from "./model";

/**
 * Lightweight class which creates a form. 
 * Template provided from the library, but it is possible to prowide a custom one (which uses Dorf components).
 * 
 * It's important to pass config in the constructor and define onSubmit method.
 */
@Component({
    moduleId: module.id,
    selector: "person-details",
    templateUrl: "../../node_modules/dorf/src/dorf-details.view.html"
})
export class PersonDetailComponent extends AbstractDorfDetailsComponent<Person> {
    @Input() domainObject: Person;
    @Output() createUpdate = new EventEmitter<IPerson>();

    // @Override
    protected get fieldDefinitions(): PropertiesToDorfDefinitionsMap<Person> {
        return Person.fieldDefinitions;
    }

    constructor(config: DorfService) {
        super(config);
    }

    onSubmit() {
        let result = this.form.value as IPerson;
        
        console.log(result);
        this.createUpdate.emit(result);
    }
}