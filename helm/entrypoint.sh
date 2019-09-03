#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
set -e

# Extract the base64 encoded config data and write this to the KUBECONFIG
echo "$KUBE_CONFIG_DATA" | base64 --decode > /tmp/config
export KUBECONFIG=/tmp/config

sh -l -c "helm $*"
