import * as cdk from 'aws-cdk-lib';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export class CognitoStack extends cdk.Stack {

  public readonly userPool:UserPool

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.userPool = new UserPool(this, 'UserPool', {
      // standardAttributes: {
      //   givenName: {
      //     required: true,
      //     mutable: true,
      //   },
      //   familyName: {
      //     required: true,
      //     mutable: true,
      //   },
      // },
    });

    this.userPool.addDomain("cognitoDomain", {
      cognitoDomain: {
        domainPrefix: "cog-domain-cdk-hell"
      }
    })

    this.userPool.addClient('UserPoolAppClient', {});



  }
}
