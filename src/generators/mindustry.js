import * as Blockly from 'blockly';

export const mindustryGenerator = new Blockly.Generator('MINDUSTRY');

const Order = {
  ATOMIC: 0,
};

mindustryGenerator.scrub_ = function(block, code, thisOnly) {
	  const nextBlock =
		      block.nextConnection && block.nextConnection.targetBlock();
	  if (nextBlock && !thisOnly) {
		      return code +'\n'+ mindustryGenerator.blockToCode(nextBlock);
		    }
	  return code;
};

mindustryGenerator.forBlock['mdtprint'] = function(block, generator) {
	  const value_massage = generator.valueToCode(block, 'MASSAGE', Order.ATOMIC);
	  const code = 'print "'+ value_massage +'"';
	  return code;
};

mindustryGenerator.forBlock['mdt_massagebroad_number'] = function(block) {
	  const text_name = block.getFieldValue('NAME');
	  const code = 'message${text_name}';
	  return [code, Order.ATOMIC];
};

mindustryGenerator.forBlock['mdt_text'] = function(block) {
	  const text_name = block.getFieldValue('NAME');
	  const code = text_name;
	  return [code, Order.ATOMIC];
};

mindustryGenerator.forBlock['mdt_textcolorsdef'] = function(block, generator) {
	  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
	  const dropdown_color = block.getFieldValue('COLOR');
	  const code = '[${dropdown_color}]${value_name}';
	  return [code, Order.ATOMIC];
};

mindustryGenerator.forBlock['mdt_printflush'] = function(block, generator) {
	  const value_massageid = generator.valueToCode(block, 'MASSAGEID', Order.ATOMIC);
	  const code = 'printflush '+ value_massageid;
	  return code;
};

mindustryGenerator.forBlock['mdt_endp'] = function(block, generator) {
	  const code = 'end';
	  return code;
};

mindustryGenerator.forBlock['mdt_wait'] = function(block, generator) {
	  const number_time = block.getFieldValue('TIME');
	  const code = 'wait ${number_time}';
	  return code;
};
