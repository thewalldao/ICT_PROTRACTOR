"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WFIRule = exports.RuleTeam = exports.RuleAgent = exports.StartTime = exports.Proficiency = exports.RuleSkill = exports.ConditionsOperator = exports.ConditionsDataPoint = exports.ConditionsCategory = exports.RecurrenceFrequency = exports.RecurrenceEnd = exports.WorkforceRuleType = void 0;
const error_wrapper_1 = require("@Utilities/protractor-wrappers/error-wrapper");
const utility_1 = require("@Utilities/general/utility");
var WorkforceRuleType;
(function (WorkforceRuleType) {
    WorkforceRuleType["AUTOMATIC"] = "Automatic";
    WorkforceRuleType["NON_AUTOMATIC"] = "Non Automatic";
})(WorkforceRuleType = exports.WorkforceRuleType || (exports.WorkforceRuleType = {}));
var RecurrenceEnd;
(function (RecurrenceEnd) {
    RecurrenceEnd["NONE"] = "None";
    RecurrenceEnd["AFTER"] = "After";
    RecurrenceEnd["BY"] = "by";
})(RecurrenceEnd = exports.RecurrenceEnd || (exports.RecurrenceEnd = {}));
var RecurrenceFrequency;
(function (RecurrenceFrequency) {
    RecurrenceFrequency["AUTOMATICALLY"] = "Automatically";
    RecurrenceFrequency["HOURLY"] = "Hourly";
    RecurrenceFrequency["DAILY"] = "Daily";
    RecurrenceFrequency["WEEKLY"] = "Weekly";
})(RecurrenceFrequency = exports.RecurrenceFrequency || (exports.RecurrenceFrequency = {}));
var ConditionsCategory;
(function (ConditionsCategory) {
    ConditionsCategory["ACD_HISTORICAL"] = "ACD Historical";
    ConditionsCategory["ACD_INTRADAY"] = "ACD Intraday";
    ConditionsCategory["INCONTACT_QM"] = "inContact QM";
    ConditionsCategory["VERINT_QM"] = "Verint QM";
})(ConditionsCategory = exports.ConditionsCategory || (exports.ConditionsCategory = {}));
var ConditionsDataPoint;
(function (ConditionsDataPoint) {
    ConditionsDataPoint["TOTAL_CONTACTS_HANDLED_FOR_THE_CURRENT_DAY"] = "Total Contacts Handled for the Current Day";
    ConditionsDataPoint["TOTAL_CONTACTS_REFUSED_FOR_THE_CURRENT_DAY"] = "Total Contacts Refused for the Current Day";
    ConditionsDataPoint["SERVICE_LEVEL_FOR_THE_CURRENT_DAY"] = "Service Level for the Current Day";
    ConditionsDataPoint["QUEUE_SIZE"] = "Queue Size";
    ConditionsDataPoint["LONGEST_WAIT_TIME"] = "Longest Wait Time";
})(ConditionsDataPoint = exports.ConditionsDataPoint || (exports.ConditionsDataPoint = {}));
var ConditionsOperator;
(function (ConditionsOperator) {
    ConditionsOperator["EQUAL_SMALLER"] = "<=";
    ConditionsOperator["EQUAL_BIGGER"] = ">=";
    ConditionsOperator["EQUAL"] = "=";
    ConditionsOperator["DIFFERENT"] = "<>";
    ConditionsOperator["BIGGER"] = ">";
    ConditionsOperator["SMALLER"] = "<";
})(ConditionsOperator = exports.ConditionsOperator || (exports.ConditionsOperator = {}));
var RuleSkill;
(function (RuleSkill) {
    RuleSkill["CHAT"] = "Chat";
    RuleSkill["CHAT_REQUIREDDISPOSITION"] = "Chat_RequiredDisposition";
    RuleSkill["LGVN_SKILL_123"] = "lgvn_skill_123";
    RuleSkill["MAX_CHAT"] = "MAX_Chat";
    RuleSkill["MAX_CHAT_REQUIREDDISPOSITION"] = "MAX_Chat_RequiredDisposition";
    RuleSkill["MAX_CHAT_SCREENPOPS"] = "MAX_Chat_ScreenPops";
    RuleSkill["REGSKILL636697656223896351"] = "RegSkill636697656223896351";
    RuleSkill["IBEMAIL"] = "IBEmail";
    RuleSkill["IBEMAIL_ACW"] = "IBEmail_ACW";
    RuleSkill["IBEMAIL_NONREQUIREDDISPOSITION"] = "IBEmail_NonRequiredDisposition";
    RuleSkill["IBEMAIL_REQUIREDDISPOSITION"] = "IBEmail_RequiredDisposition";
    RuleSkill["IBEMAIL636698087560843642"] = "IBEmail636698087560843642";
    RuleSkill["MAX_IBEMAIL"] = "MAX_IBEmail";
    RuleSkill["MAX_IBEMAIL_NONREQUIREDDISPOSI"] = "MAX_IBEmail_NonRequiredDisposi";
    RuleSkill["MAX_IBEMAIL_REQUIREDDISPOSITIO"] = "MAX_IBEmail_RequiredDispositio";
    RuleSkill["MAX_IBEMAIL_SCREENPOPS"] = "MAX_IBEmail_ScreenPops";
    RuleSkill["MAX_OBEMAIL"] = "MAX_OBEmail";
    RuleSkill["MAX_OBEMAIL_ACW"] = "MAX_OBEmail_ACW";
    RuleSkill["MAX_OBEMAIL_NONREQUIREDDISPOSI"] = "MAX_OBEmail_NonRequiredDisposi";
    RuleSkill["MAX_OBEMAIL_REQUIREDDISPOSITIO"] = "MAX_OBEmail_RequiredDispositio";
    RuleSkill["OBEMAIL"] = "OBEmail";
    RuleSkill["OBEMAIL_ACW"] = "OBEmail_ACW";
    RuleSkill["OBEMAIL_NONREQUIREDDISPOSITION"] = "OBEmail_NonRequiredDisposition";
    RuleSkill["OBEMAIL_REQUIREDDISPOSITION"] = "OBEmail_RequiredDisposition";
    RuleSkill["PCEMAILTEST"] = "PCEmailTest";
    RuleSkill["DEFAULTINBOUND"] = "DefaultInbound";
    RuleSkill["IBPHONE"] = "IBPhone";
    RuleSkill["IBPHONE_ACW"] = "IBPhone_ACW";
    RuleSkill["IBPHONE_NOASSIGNEDAGENTS"] = "IBPhone_NoAssignedAgents";
    RuleSkill["IBPHONE_NONREQUIREDDISPOSITION"] = "IBPhone_NonRequiredDisposition";
    RuleSkill["IBPHONE_REQUIREDDISPOSITION"] = "IBPhone_RequiredDisposition";
    RuleSkill["MAX_IBPHONE"] = "MAX_IBPhone";
    RuleSkill["MAX_IBPHONE_NONREQUIREDDISPOSI"] = "MAX_IBPhone_NonRequiredDisposi";
    RuleSkill["MAX_IBPHONE_REQUIREDDISPOSITIO"] = "MAX_IBPhone_RequiredDispositio";
    RuleSkill["MAX_IBPHONE_SCREENPOPS"] = "MAX_IBPhone_ScreenPops";
    RuleSkill["MAX_OBPHONE"] = "MAX_OBPhone";
    RuleSkill["MAX_OBPHONE_ACW"] = "MAX_OBPhone_ACW";
    RuleSkill["MAX_OBPHONE_NONREQUIREDDISPOSI"] = "MAX_OBPhone_NonRequiredDisposi";
    RuleSkill["MAX_OBPHONE_REQUIREDDISPOSITIO"] = "MAX_OBPhone_RequiredDispositio";
    RuleSkill["OBPHONE"] = "OBPhone";
    RuleSkill["OBPHONE_ACW"] = "OBPhone_ACW";
    RuleSkill["OBPHONE_NONREQUIREDDISPOSITION"] = "OBPhone_NonRequiredDisposition";
    RuleSkill["OBPHONE_REQUIREDDISPOSITION"] = "OBPhone_RequiredDisposition";
    RuleSkill["OBPHONECOMPRESS"] = "OBPhoneCompress";
    RuleSkill["OUTBOUNDPHONE"] = "OutboundPhone";
    RuleSkill["PCPHONE"] = "PCPhone";
    RuleSkill["PCPHONE_ACW"] = "PCPhone_ACW";
    RuleSkill["PCPHONE_ACW_DISPOSETINSCRIPT"] = "PCPhone_ACW_DispoSetInScript";
    RuleSkill["PCPHONE_ACW_DISPOSITION"] = "PCPhone_ACW_Disposition";
    RuleSkill["PCPHONE_BLEND_ACW"] = "PCPhone_Blend_ACW";
    RuleSkill["PCPHONE_QUEUE_CONTACTS"] = "PCPhone_Queue_Contacts";
    RuleSkill["REGSKILL_636698089762598333"] = "RegSkill 636698089762598333";
    RuleSkill["MAX_VOICEMAIL"] = "MAX_VoiceMail";
    RuleSkill["MAX_VOICEMAIL_NONREQUIREDDISPO"] = "MAX_VoiceMail_NonRequiredDispo";
    RuleSkill["MAX_VOICEMAIL_REQUIREDDISPOSIT"] = "MAX_VoiceMail_RequiredDisposit";
    RuleSkill["MAX_VOICEMAIL_SCREENPOPS"] = "MAX_VoiceMail_ScreenPops";
    RuleSkill["VOICEMAIL"] = "VoiceMail";
    RuleSkill["VOICEMAIL_ACW"] = "VoiceMail_ACW";
    RuleSkill["VOICEMAIL_NONREQUIREDDISPO"] = "VoiceMail_NonRequiredDispo";
    RuleSkill["VOICEMAIL_REQUIREDDISPOSITION"] = "VoiceMail_RequiredDisposition";
    RuleSkill["MAX_WORK_ITEM"] = "MAX_Work Item";
    RuleSkill["MAX_WORK_ITEM_NONREQUIREDDISPO"] = "MAX_Work Item_NonRequiredDispo";
    RuleSkill["MAX_WORK_ITEM_REQUIREDDISPOSIT"] = "MAX_Work Item_RequiredDisposit";
    RuleSkill["MAX_WORK_ITEM_SCREENPOPS"] = "MAX_Work Item_ScreenPops";
    RuleSkill["WORK_ITEM"] = "Work Item";
    RuleSkill["WORK_ITEM_ACW"] = "Work Item_ACW";
    RuleSkill["WORK_ITEM_NONREQUIREDDISPO"] = "Work Item_NonRequiredDispo";
    RuleSkill["WORK_ITEM_REQUIREDDISPOSITION"] = "Work Item_RequiredDisposition";
})(RuleSkill = exports.RuleSkill || (exports.RuleSkill = {}));
var Proficiency;
(function (Proficiency) {
    Proficiency["HIGHEST"] = "1 - Highest";
    Proficiency["TWO"] = "2";
    Proficiency["THREE"] = "3";
    Proficiency["FOUR"] = "4";
    Proficiency["FIVE"] = "5";
    Proficiency["SIX"] = "6";
    Proficiency["SEVEN"] = "7";
    Proficiency["EIGHT"] = "8";
    Proficiency["NINE"] = "9";
    Proficiency["TEN"] = "10";
    Proficiency["ELEVEN"] = "11";
    Proficiency["TWELVE"] = "12";
    Proficiency["THIRTEEN"] = "13";
    Proficiency["FOURTEEN"] = "14";
    Proficiency["FIFTEEN"] = "15";
    Proficiency["SIXTEEN"] = "16";
    Proficiency["SEVENTEEN"] = "17";
    Proficiency["EIGHTTEEN"] = "18";
    Proficiency["NINETEEN"] = "19";
    Proficiency["LOWEST"] = "20 - Lowest";
})(Proficiency = exports.Proficiency || (exports.Proficiency = {}));
var StartTime;
(function (StartTime) {
    StartTime["TWELVE_AM"] = "12:00 AM";
    StartTime["HALFTWELVE_AM"] = "12:30 AM";
    StartTime["ONE_AM"] = "1:00 AM";
    StartTime["HALF_AM"] = "1:30 AM";
    StartTime["TWO_AM"] = "2:00 AM";
    StartTime["HALFTWO_AM"] = "2:30 AM";
    StartTime["THREEE_AM"] = "3:00 AM";
    StartTime["HALFTHREE_AM"] = "3:30 AM";
    StartTime["FOUR_AM"] = "4:00 AM";
    StartTime["HALFFOUR_AM"] = "4:30 AM";
    StartTime["FIVE_AM"] = "5:00 AM";
    StartTime["HALFFIVE_AM"] = "5:30 AM";
    StartTime["SIX_AM"] = "6:00 AM";
    StartTime["HALFSIX_AM"] = "6:30 AM";
    StartTime["SEVEN_AM"] = "7:00 AM";
    StartTime["HALFSEVEN_AM"] = "7:30 AM";
    StartTime["EIGHT_AM"] = "8:00 AM";
    StartTime["HALFEIGHT_AM"] = "8:30 AM";
    StartTime["NINE_AM"] = "9:00 AM";
    StartTime["HALFNINE_AM"] = "9:30 AM";
    StartTime["TEN_AM"] = "10:00 AM";
    StartTime["HALFTEN_AM"] = "10:30 AM";
    StartTime["ELEVEN_AM"] = "11:00 AM";
    StartTime["HALFELEVEN_AM"] = "11:30 AM";
    StartTime["TWELVE_PM"] = "12:00 PM";
    StartTime["HALFTWELVE_PM"] = "12:30 PM";
    StartTime["ONE_PM"] = "1:00 PM";
    StartTime["HALFONE_PM"] = "1:30 PM";
    StartTime["TWO_PM"] = "2:00 PM";
    StartTime["HALFTWO_PM"] = "2:30 PM";
    StartTime["THREE_PM"] = "3:00 PM";
    StartTime["HALFTHREE_PM"] = "3:30 PM";
    StartTime["FOUR_PM"] = "4:00 PM";
    StartTime["HALFFOUR_PM"] = "4:30 PM";
    StartTime["FIVE_PM"] = "5:00 PM";
    StartTime["HALFFIVE_PM"] = "5:30 PM";
    StartTime["SIX_PM"] = "6:00 PM";
    StartTime["HALFSIX_PM"] = "6:30 PM";
    StartTime["SEVEN_PM"] = "7:00 PM";
    StartTime["HALFSEVEN_PM"] = "7:30 PM";
    StartTime["EIGHT_PM"] = "8:00 PM";
    StartTime["HALFEIGHT_PM"] = "8:30 PM";
    StartTime["NINE_PM"] = "9:00 PM";
    StartTime["HALFNINE_PM"] = "9:30 PM";
    StartTime["TEN_PM"] = "10:00 PM";
    StartTime["HALFTEN_PM"] = "10:30 PM";
    StartTime["ELEVEN_PM"] = "11:00 PM";
    StartTime["HALFELEVEN_PM"] = "11:30 PM";
})(StartTime = exports.StartTime || (exports.StartTime = {}));
var RuleAgent;
(function (RuleAgent) {
    RuleAgent["SUPERVISORSMOKEDEPLOY"] = "0001, SupervisorSmokeDeploy";
    RuleAgent["SMOKEDEPLOY01"] = "0001, SmokeDeploy";
    RuleAgent["SMOKEDEPLOY02"] = "0002, SmokeDeploy";
    RuleAgent["SMOKEDEPLOY03"] = "0003, SmokeDeploy";
    RuleAgent["CHAT01"] = "Chat, Max";
    RuleAgent["CHAT02"] = "Chat, Max";
    RuleAgent["CHAT03"] = "Chat, Max";
    RuleAgent["CHATREQUIRED01"] = "ChatRequired, Max";
    RuleAgent["CHATREQUIRED02"] = "ChatRequired, Max";
    RuleAgent["DOE"] = "Doe, John";
    RuleAgent["IBEMAIL_CHAT"] = "Ibemail Chat, Max";
    RuleAgent["IBEMAIL_IBPHONE_CHAT"] = "Ibemail IbPhone Chat, Max";
    RuleAgent["IBEMAIL_IBPHONE"] = "Ibemail IbPhone, Max";
    RuleAgent["IBEMAIL_OBPHONE"] = "Ibemail OBPhone, Max";
    RuleAgent["IBEMAIL_VOICEMAIL"] = "Ibemail VoiceMail, Max";
    RuleAgent["IBEMAIL_WORKITEM"] = "Ibemail WorkItem, Max";
    RuleAgent["IBEMAIL"] = "Ibemail, Max";
    RuleAgent["IBEMAIL_NR"] = "Ibemail_nr, Max";
    RuleAgent["IBEMAIL_RIBPHONE"] = "Ibemail_r Ibphone, Max";
    RuleAgent["IBEMAIL_R"] = "Ibemail_r, Max";
    RuleAgent["IBPHONE"] = "IbPhone, Max";
    RuleAgent["IBPHONE_NR"] = "IbPhone_nr, Max";
    RuleAgent["IBPHONE_ROBPHONE"] = "IbPhone_r Obphone, Max";
    RuleAgent["IBPHONE_R01"] = "IbPhone_r, Max";
    RuleAgent["IBPHONE_R02"] = "IbPhone_r, Max";
    RuleAgent["OBEMAIL_ACW"] = "Obemail ACW, Max";
    RuleAgent["OBEMAIL_CHAT"] = "Obemail Chat, Max";
    RuleAgent["OBEMAIL_IBPHONE"] = "Obemail IbPhone, Max";
    RuleAgent["OBEMAIL_IBPHONE_R"] = "Obemail IbPhone_r, Max";
    RuleAgent["OBEMAIL_OBPHONE"] = "Obemail OBPhone, Max";
    RuleAgent["OBEMAIL_VOICEMAIL"] = "Obemail Voicemail, Max";
    RuleAgent["OBEMAIL_WORKITEM"] = "Obemail WorkItem, Max";
    RuleAgent["OBEMAIL"] = "Obemail, Max";
    RuleAgent["OBEMAIL_NR"] = "Obemail_nr, Max";
    RuleAgent["OBEMAIL_RIBPHONE"] = "Obemail_r IbPhone, Max";
    RuleAgent["OBEMAIL_R"] = "Obemail_r, Max";
    RuleAgent["OBPHONE_ACW"] = "Obphone ACW, Max";
    RuleAgent["OBPHONE_VOICE_MAIL"] = "Obphone Voicemail, Max";
    RuleAgent["OBPHONE1"] = "Obphone, Max";
    RuleAgent["OBPHONE2"] = "ObPhone, Max2";
    RuleAgent["OBPHONE3"] = "ObPhone, Max2";
    RuleAgent["OBPHONE_NR"] = "Obphone_nr, Max";
    RuleAgent["OBPHONE_R"] = "Obphone_r, Max";
    RuleAgent["RD_OBPHONE_CHAT_VOICEMAIL"] = "RD ObPhone Chat Voicemail, Max";
    RuleAgent["SMOKEDEPLOYSC0001COM1"] = "SmokeDeploySC0001.com, Administrator";
    RuleAgent["SMOKEDEPLOYSC0001COM2"] = "SmokeDeploySC0001.com, Manager";
    RuleAgent["TRANSFER"] = "Transfer, Max";
    RuleAgent["VOICEMAIL"] = "Voicemail, Max";
    RuleAgent["VOICEMAIL_NR"] = "Voicemail_nr, Max";
    RuleAgent["VOICEMAIL_R"] = "Voicemail_r, Max";
})(RuleAgent = exports.RuleAgent || (exports.RuleAgent = {}));
var RuleTeam;
(function (RuleTeam) {
    RuleTeam["ADMIN"] = "Admin";
    RuleTeam["BULK_UPLOADER"] = "Bulk Uploader";
    RuleTeam["FGCVBGVH"] = "fgcvbgvh";
    RuleTeam["GBU_TEAM"] = "GBU Team";
    RuleTeam["GBU636698564798073956"] = "GBU636698564798073956";
    RuleTeam["LGVN_TEST1"] = "LGVN_test1";
    RuleTeam["MAX_AUTOMATION"] = "MAX Automation";
    RuleTeam["OTXAJZECWUHYWCJUHODZAFZJAAELEH"] = "OtxAjZEcwUhyWcjuhoDzafZJaaeLeh";
    RuleTeam["REGTEAM164"] = "RegTeam164";
    RuleTeam["REGTEAM636697655265233622"] = "RegTeam636697655265233622";
    RuleTeam["REGTEAM843"] = "RegTeam843";
})(RuleTeam = exports.RuleTeam || (exports.RuleTeam = {}));
class WFIRule {
    initData(reportName) {
        try {
            this.ruleName = reportName + utility_1.Utility.createRandomString(15);
            this.frequency = RecurrenceFrequency.AUTOMATICALLY;
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
            let tmpdate = new Date();
            let date = new Date(tmpdate.setDate(tmpdate.getDate() + 1));
            this.startDate = date.toLocaleDateString("en-US", options);
            this.startTime = StartTime.THREEE_AM;
            this.end = RecurrenceEnd.NONE;
            this.category = ConditionsCategory.ACD_INTRADAY;
            this.dataPoint = ConditionsDataPoint.LONGEST_WAIT_TIME;
            this.operator = ConditionsOperator.EQUAL_SMALLER;
            this.value = Math.floor(Math.random() * 100) + 1;
            this.numberOfContacts = Math.floor(Math.random() * 10) + 1;
            this.skill = RuleSkill.IBPHONE;
            this.proficiency = Proficiency.THREE;
            this.recoveryLevel = Math.floor(Math.random() * 100) + this.value;
            this.agent = RuleAgent.SMOKEDEPLOY01;
            this.team = RuleTeam.ADMIN;
            return this;
        }
        catch (err) {
            throw new error_wrapper_1.errorwrapper.CustomError(this.initData, err.message);
        }
    }
}
exports.WFIRule = WFIRule;
//# sourceMappingURL=workforce-rule-info.js.map