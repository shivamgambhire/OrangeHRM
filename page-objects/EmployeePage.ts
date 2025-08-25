import { Locator, Page } from '@playwright/test';

export class EmployeePage{
    readonly page: Page;
    readonly PIM: Locator;
    readonly Addemployee: Locator;


    constructor(page: Page) {
        this.page = page;
        this.PIM = page.getByText("PIM");
        this.Addemployee = page.getByText("Add Employee");
    }

        async clickOnPIM(){
            await this.PIM.click();
        }

        async clickOnAddEmployee(){
            await this.Addemployee.click();
        }

}