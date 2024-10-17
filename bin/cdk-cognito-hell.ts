#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { CognitoStack } from '../lib/cognito-stack';
import { LambdaStack } from '../lib/lambda-stack';

const app = new cdk.App();
const cognitoStack = new CognitoStack(app, 'cognitoStack', {});
const lambdaStack = new LambdaStack(app, 'lambdaStack', {
  userPoolId: cognitoStack.userPool.userPoolId,
});


// new cdk.CfnOutput(cognitoStack, "ExportsOutputRefUserPool6BA7E5F296FD7236", {
//   value: "eu-central-1_mxhWJoMmZ",
//   exportName: "cognitoStack:ExportsOutputRefUserPool6BA7E5F296FD7236",
// });