export default class TestInfo{
    private _browser : string;
    private _cluster : string;
    private _testName : string;
    
    constructor(browserName:string, custerName:string, testName?:string){
        this._browser = browserName;
        this._cluster = custerName;
        this._testName = testName;
    }

    public getBrowser():string{
        return this._browser;
    }

    public getCluster():string{
        return this._cluster;
    }

    public getTestName():string{
        return this._testName
    }
}