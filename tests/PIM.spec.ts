import {expect, test} from "@playwright/test"
import { EmployeePage } from "../page-objects/EmployeePage";

test.describe.skip("PIM", () => {

        test("navigate to PIM", async ({ page }) => {
            const employeePage = new EmployeePage(page);

            await page.goto('/');   

            await employeePage.clickOnPIM();
            await employeePage.clickOnAddEmployee();
        });



        //Click on Add Employee





})