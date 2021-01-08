import  Dashboard  from "./dashboard";

export default class TestResultsPage extends Dashboard{
    private static testResultPage: TestResultsPage = null;

    public static getInstance():TestResultsPage{
        this.testResultPage = new TestResultsPage()
        return this.testResultPage
    }
}