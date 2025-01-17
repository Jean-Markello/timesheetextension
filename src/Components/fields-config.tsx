import { useState } from 'react'
import { Plus, Trash2, ChevronDown, ChevronUp, Save } from 'lucide-react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'

interface FieldConfig {
  column: string
  title: string
  type: string
}

export function FieldsConfiguration() {
  const [fields, setFields] = useState<FieldConfig[]>([
    { column: '', title: '', type: 'text' }
  ])
  const [expandedField, setExpandedField] = useState<number | null>(0)

  const addField = () => {
    setFields([...fields, { column: '', title: '', type: 'text' }])
    setExpandedField(fields.length)
  }

  const removeField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index))
    if (expandedField === index) {
      setExpandedField(null)
    } else if (expandedField !== null && expandedField > index) {
      setExpandedField(expandedField - 1)
    }
  }

  const updateField = (index: number, field: Partial<FieldConfig>) => {
    const newFields = [...fields]
    newFields[index] = { ...newFields[index], ...field }
    setFields(newFields)
  }

  const saveConfiguration = () => {
    console.log('Saving configuration:', fields)
  }

  const toggleExpand = (index: number) => {
    console.log('Toggling index:', index, 'Current expandedField:', expandedField)
    setExpandedField(expandedField === index ? null : index)
  }

  return (
        <div className="bg-white rounded-2xl shadow-sm border p-4 text-black">
          <h1 className="text-2xl font-bold mb-4">Configure Excel Fields</h1>
          
          <div className="flex flex-col h-[calc(100vh-300px)] min-h-[300px]">
            <div className="flex-1 overflow-y-auto pr-2 space-y-2 hide-scrollbar">
              {fields.map((field, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg overflow-hidden"
                >
                  <div 
                    className="flex justify-between items-center p-3 bg-gray-100 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-base font-medium text-black">Field {index + 1}</span>
                      <span className="text-sm text-gray-500">
                        {field.column && `Column ${field.column}`}
                        {field.title && ` - ${field.title}`}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        className="bg-red-500 flex items-center justify-center z-10"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeField(index)
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-white" />
                      </button>
                      {expandedField === index ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </div>
                  {expandedField === index && (
                    <div className="p-3 space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Excel Column
                        </label>
                        <Select
                          value={field.column}
                          onValueChange={(value) => updateField(index, { column: value })}
                        >
                          <SelectTrigger className="border border-gray-300 bg-white text-gray-400 text-xs font-normal">
                            <SelectValue placeholder="Select column" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {['A', 'B', 'C', 'D', 'E', 'F'].map((col) => (
                              <SelectItem key={col} value={col} className="text-black">
                                Column {col}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Field Title
                        </label>
                        <Input
                          placeholder="Enter field title"
                          value={field.title}
                          onChange={(e) => updateField(index, { title: e.target.value })}
                          className="bg-white text-xs text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Data Type
                        </label>
                        <Select
                          value={field.type}
                          onValueChange={(value) => updateField(index, { type: value })}
                        >
                          <SelectTrigger className="border text-xs border-gray-300 text-gray-400 bg-white font-normal ">
                            <SelectValue placeholder="Select type" className="text-black" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="text" className="text-black">Text</SelectItem>
                            <SelectItem value="number" className="text-black">Number</SelectItem>
                            <SelectItem value="date" className="text-black">Date</SelectItem>
                            <SelectItem value="boolean" className="text-black">Yes/No</SelectItem>
                            <SelectItem value="email" className="text-black">Email</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-4 mt-4 border-t sticky bottom-0 bg-white">
              <Button 
                onClick={addField}
                className="bg-[#86CDDA] text-gray-800 hover:bg-[#6BB8C7]"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Field
              </Button>
              <Button 
                onClick={saveConfiguration}
                className="bg-green-500 text-white hover:bg-green-600"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Configuration
              </Button>
            </div>
          </div>
        </div>
  )
}
