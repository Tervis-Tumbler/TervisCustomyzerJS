import { Add_MemberScriptProperty, New_HashTableIndex } from '../TervisUtilityJS/TervisUtilityJS.js'

export function Get_CustomyzerPrintImageTemplateSizeAndFormType ({
    $PrintImageTemplateName
}) {
    let {Size, FormType} = $PrintImageTemplateNameToSizeAndFormTypeIndex[$PrintImageTemplateName]
    
    if (Array.isArray(FormType)) {
        var $FormType = FormType[0]
    } else {
        var $FormType = FormType
    }
    
    return {$Size: Size, $FormType}
}

export function Get_CustomyzerImageTemplateName ({
    $Size,
    $FormType,
    $TemplateType,
    $PrintTemplateType
}) {
    let $Template = $SizeAndFormTypeToImageTemplateNamesIndex[`${$Size}${$FormType}`].ImageTemplateName[$TemplateType]
    if (!$PrintTemplateType) {
        return $Template
    } else {
        return $Template[$PrintTemplateType]
    }
}

let $SizeAndFormTypeToImageTemplateNames = [
    {
        Size: 6,
        FormType: "SIP",
        PrintImageDimensions: {
            Width: 2605,
            Height: 1051
        },
        ImageTemplateName: {
            Final: "6oz_wrap_final",
            Mask: "6oz_wrap_mask",
            Vignette: "6_Warp_trans",
            Base: "6oz_base2",
            Print: {
                Illustrator: "6_cstm_print.ai",
                InDesign: "6SIP-cstm-print.idml",
                Scene7: "6_cstm_print"
            }
        }
    },
    {
        Size: 9,
        FormType: ["SWG","WINE"],
        PrintImageDimensions: {
            Width: 3260,
            Height: 962
        },
        ImageTemplateName: {
            Final: "9oz_wrap_final",
            Mask: "9oz_wrap_mask",
            Vignette: "9_Warp_trans",
            Base: "9oz_base2",
            Print: {
                Illustrator: "9_cstm_print.ai",
                InDesign: "9WINE-cstm-print.idml",
                Scene7: "9_cstm_print"
            }
        }
    },
    {
        Size: 10,
        FormType: ["WAV","DWT"],
        PrintImageDimensions: {
            Width: 2767,
            Height: 1640
        },
        ImageTemplateName: {
            Final: "10oz_wrap_final",
            Mask: "10oz_wrap_mask",
            Vignette: "10_Warp_trans",
            Base: "10oz_base2",
            Print: {
                Illustrator: "10_cstm_print.ai",
                InDesign: "10WAV-cstm-print.idml",
                Scene7: "10_cstm_print"
            }
        }
    },
    {
        Size: 16,
        FormType: "DWT",
        ArtBoardDimensions: {
            Width: 2717,
            Height: 1750
        },
        PrintImageDimensions: {
            Width: 3084,
            Height: 1873
        },
        ImageTemplateName: {
            Final: "16oz_wrap_final",
            Mask: "16oz_wrap_mask",
            Vignette: "16_Warp_trans",
            Base: "16oz_base2",
            FinalWithERPNumber: "16oz_final_x2_v1",
            Print: {
                Illustrator: "16_cstm_print.ai",
                InDesign: "16DWT-cstm-print.idml",
                Scene7: "16_cstm_print",
                Scene7AR: "16_cstm_print_mark"
            },
            WhiteInkMask: "16oz_wrap_mask_black"
        }
    },
    {
        Size: 16,
        FormType: "MUG",
        PrintImageDimensions: {
            Width: 3628,
            Height: 1339
        },
        ImageTemplateName: {
            Final: "MUG_wrap_final",
            Mask: "MUG_wrap_mask",
            Vignette: "MUG_Warp_trans",
            Base: "MUG_base2",
            Print: {
                Illustrator: "MUG_cstm_print.ai",
                InDesign: "16MUG-cstm-print.idml",
                Scene7: "MUG_cstm_print"
            }
        }
    },
    {
        Size: 16,
        FormType: "BEER",
        PrintImageDimensions: {
            Width: 3074,
            Height: 1748
        },
        ImageTemplateName: {
            Final: "BEER_wrap_final",
            Mask: "BEER_wrap_mask",
            Vignette: "BEER_Warp_trans",
            Base: "BEER_base2",
            Print: {
                Illustrator: "BEER_cstm_print.ai",
                InDesign: "16BEER-cstm-print.idml",
                Scene7: "BEER_cstm_print"
            }
        }
    },
    {
        Size: 24,
        FormType: "DWT",
        PrintImageDimensions: {
            Width: 3574,
            Height: 2402
        },
        ImageTemplateName: {
            Final: "24oz_wrap_final",
            Mask: "24oz_wrap_mask",
            Vignette: "24_Warp_trans",
            Base: "24oz_base2",
            Print: {
                Illustrator: "24_cstm_print.ai",
                InDesign: "24DWT-cstm-print.idml",
                Scene7: "24_cstm_print"
            }
        }
    },
    {
        Size: 24,
        FormType: "WB",
        PrintImageDimensions: {
            Width: 2977,
            Height: 2420
        },
        ImageTemplateName: {
            Final: "WB_wrap_final",
            Mask: "WB_wrap_mask",
            Vignette: "WB_Warp_trans",
            Base: "WB_base2",
            Print: {
                Illustrator: "WB_cstm_print.ai",
                InDesign: "24WB-cstm-print.idml",
                Scene7: "WB_cstm_print"
            }
        }
    },
    {
        Size: 30,
        FormType: "SS",
        PrintImageDimensions: {
            Width: 3394,
            Height: 2409
        },
        ImageTemplateName: {
            Final: "",
            Mask: "SS_30oz_wrap_mask",
            Vignette: "",
            Base: "SS_30oz_base2",
            Print: {
                Illustrator: "SS30_cstm_print.ai",
                InDesign: "30SS-cstm-print.idml",
                Scene7: "SS30_cstm_print"
            }
        }
    },
    {
        Size: 20,
        FormType: "SS",
        PrintImageDimensions: {
            Width: 2974,
            Height: 2032
        },
        ImageTemplateName: {
            Final: "",
            Mask: "SS_20oz_wrap_mask",
            Vignette: "",
            Base: "SS_20oz_base2",
            Print: {
                Illustrator: "SS20_cstm_print.ai",
                InDesign: "20SS-cstm-print.idml",
                Scene7: "SS20_cstm_print"
            }
        }
    },
    {
        Size: 24,
        FormType: "SS",
        PrintImageDimensions: {
            Width: 2916,
            Height: 2367
        },
        ImageTemplateName: {
            Final: "",
            Mask: "SS_24oz_wrap_mask",
            Vignette: "",
            Base: "SS_24oz_base2",
            Print: {
                Illustrator: "SS24_cstm_print.ai",
                InDesign: "24SS-cstm-print.idml",
                Scene7: "SS24_cstm_print"
            }
        }
    }
]

Add_MemberScriptProperty({$InputObject: $SizeAndFormTypeToImageTemplateNames, $Name: "SizeAndFormTypes", $Value: function (){
    if (Array.isArray(this.FormType)) {
        var $SizeAndFormTypes = []
        for (const $FromTypeInstance of this.FormType) {
            $SizeAndFormTypes.push(`${this.Size}${$FromTypeInstance}`)
        }
        return $SizeAndFormTypes
    } else {
        return `${this.Size}${this.FormType}`
    }
}})

var $SizeAndFormTypeToImageTemplateNamesIndex = New_HashTableIndex({$InputObject: $SizeAndFormTypeToImageTemplateNames, $PropertyToIndex: "SizeAndFormTypes"})

Add_MemberScriptProperty ({$InputObject: $SizeAndFormTypeToImageTemplateNames, $Name: "PrintImageTemplateNames", $Value: function (){
    return Object.values(this.ImageTemplateName.Print)
}})

let $PrintImageTemplateNameToSizeAndFormTypeIndex = New_HashTableIndex({ $InputObject: $SizeAndFormTypeToImageTemplateNames, $PropertyToIndex: "PrintImageTemplateNames"})