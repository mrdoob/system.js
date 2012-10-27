import os

source = '../src/System.js'
output = '../build/system.min.js'

os.system('java -jar compiler/compiler.jar --language_in=ECMASCRIPT5_STRICT --js ' + source + ' --js_output_file ' + output)

with open(output,'r') as f: text = f.read()
with open(output,'w') as f: f.write("// system.js - http://github.com/mrdoob/system.js\n" + text)
