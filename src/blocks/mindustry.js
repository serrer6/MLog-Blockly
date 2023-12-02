import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  "type": "mdtprint",
  "message0": "Print--把 %1 写入打印缓存 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "MASSAGE",
      "check": "String"
    },
    {
      "type": "input_end_row",
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
	{
  "type": "mdt_massagebroad_number",
  "message0": "massage %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "1"
    },
    {
      "type": "input_end_row"
    }
  ],
  "output": "BUID",
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
	},
	{
  "type": "mdt_text",
  "message0": "文本\" %1 \" %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "Forg"
    },
    {
      "type": "input_end_row"
    }
  ],
  "output": "String",
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
	},
	{
  "type": "mdt_textcolorsdef",
  "message0": "逻辑贴士--设置 %1 的文本颜色为 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "COLOR",
      "options": [
        [
          "灰色",
          "grey"
        ],
        [
          "红色",
          "red"
        ],
        [
          "橙色",
          "orange"
        ],
        [
          "黄色",
          "yellow"
        ],
        [
          "绿色",
          "green"
        ],
        [
          "青色",
          "cyan"
        ],
        [
          "蓝色",
          "blue"
        ],
        [
          "紫色",
          "purple"
        ],
        [
          "棕色",
          "brown"
        ],
        [
          "黑色",
          "black"
        ],
        [
          "粉色",
          "pink"
        ]
      ]
    },
    {
      "type": "input_end_row"
    }
  ],
  "output": "String",
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
	},
	{
  "type": "mdt_printflush",
  "message0": "Print Flush--把打印缓存中的内容输出到 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "MASSAGEID",
      "check": "BUID"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
	},
	{
  "type": "mdt_read",
  "message0": "Read--读 %1 的第 %2 位内存到变量 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NVER"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
	},
	{
  "type": "mdt_write",
  "message0": "Write--把 %1 写入 %2 的第 %3 位内存",
  "args0": [
    {
      "type": "input_value",
      "name": "NVER"
    },
    {
      "type": "input_value",
      "name": "NAME"
    },
    {
      "type": "field_number",
      "name": "NAME",
      "value": 0
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
	},
	{
  "type": "mdt_endp",
  "message0": "End--返回第一行",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
	},
	{
  "type": "mdt_wait",
  "message0": "Wait--等待 %1 秒",
  "args0": [
    {
      "type": "field_number",
      "name": "TIME",
      "value": 0
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
	}]);
