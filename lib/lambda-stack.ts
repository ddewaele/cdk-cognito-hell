import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as path from 'path';


interface LambdaStackProps extends cdk.StackProps {
  userPoolId: string;
}

export class LambdaStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    const simpleLambda = new lambda.Function(this, 'SimpleLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../lambda')),
      environment: {
        "USER_POOL_ID": props.userPoolId
      }
    });


  }
}
