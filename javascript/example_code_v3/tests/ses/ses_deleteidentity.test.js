process.argv.push('--arg1', 'eu-west-1');
process.argv.push('--arg2', 'DOMAIN_NAME');

const mockDeleteIdentity = jest.fn();
jest.mock('@aws-sdk/client-ses/commands/DeleteIdentityCommand', () => ({
    SES: function SES() {
        this.DeleteIdentityCommand = mockDeleteIdentity
    }
}));
const {run} = require("../../ses/ses_deleteidentity.js");

//test function
test("has to mock SES#createRecepiptFilter",  async (done) => {
    await run();
    expect(mockDeleteIdentity).toHaveBeenCalled;
    done();
});
