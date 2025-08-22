import {test,expect} from "@playwright/test"
import { LoginPage } from  "../page-objects/LoginPage"

test.describe("Login and Verify", ()=> {
    
    let loginpage: LoginPage

    test.beforeEach(async ({page}) =>{
        loginpage = new LoginPage(page)

        await loginpage.visitAndLogin()
 })

    test("Verify Login to OrangeHRM", async ({page}) =>{
        
        await expect(page.locator("//h6[normalize-space()='Dashboard']")).toContainText("Dashboard")
        await expect(page.locator(".oxd-userdropdown-name")).not.toBeEmpty()
    })

   
})
