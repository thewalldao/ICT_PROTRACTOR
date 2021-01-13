import  Dashboard  from "./dashboard";

export default class ReportingPage extends Dashboard{
    private static reportingPage: ReportingPage = null;

    public static getInstance():ReportingPage{
        this.reportingPage = new ReportingPage()
        return this.reportingPage
    }
}