These steps after creating the docker image

Tags : images_gallery: use, use: images_gallery

## Create Cluster
Cluster Name : test_image_gallary
Kubernetes version : 1.23
Cluster service role : Create New (Use the process mentioned below)
Create VPC with public and private subnet : https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html#VPC_Scenario2_Implementation
Cluster endpoint access: Public and Private
Add-ons: Default 
Add-on's configuration: Default


### Create Role
Open the IAM console at https://console.aws.amazon.com/iam/.
Choose Roles, then Create role.
Under Trusted entity type, select AWS service.
From the Use cases for other AWS services dropdown list, choose EKS.
Choose EKS - Cluster for your use case, and then choose Next.
On the Add permissions tab, choose Next.
For Role name, enter a unique name for your role, such as eksClusterRole.
For Description, enter descriptive text such as Amazon EKS - Cluster role.
Choose Create role.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": [
                    "eks.amazonaws.com"
                ]
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```
Tags
images_gallery: use
use: images_gallery


## Create workers Fargate serverless

Creating the Amazon EKS pod execution role : https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html#create-pod-execution-role

Create Fargate Profile : https://docs.aws.amazon.com/eks/latest/userguide/fargate-getting-started.html#fargate-gs-create-profile

## Create kubectl config file
Creating kubeconfig file: https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html


