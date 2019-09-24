#!/bin/bash

TEMP_DIR=$1

echo "copying declaration.d.ts to types/common/declaration.d.ts"
mv $TEMP_DIR/declaration.d.ts types/common/declaration.d.ts

echo "copying \$w.d.ts to types/common/\$w.d.ts"
mv $TEMP_DIR/\$w.d.ts types/common/\$w.d.ts

echo "removing $TEMP_DIR folder"
rm -rf $TEMP_DIR