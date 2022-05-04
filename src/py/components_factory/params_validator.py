from typing import Dict

from src.py.exceptions.custom_exceptions import ParamAttributesMissingError, RequiredParamsMissingError, \
    ParamValueNotAllowedError


def validate_params(allowed: Dict, provided):
    # Validates provided params structure
    if any(k not in dir(param) for k in ('key', 'value', 'type') for param in provided):
        raise ParamAttributesMissingError

    # Checks if all required fields were provided
    required = set([key for key in allowed if allowed[key]['required']])
    provided_keys = set([param.key for param in provided])
    if not required.issubset(provided_keys):
        raise RequiredParamsMissingError

    # Checks if provided values are in the allowed values range (if the range exists)
    for param in provided:
        if param.key in allowed:  # Avoids problems if the user provides more than the expected params
            if 'allowed_values' in allowed[param.key]:
                if param.value not in allowed[param.key]['allowed_values']:
                    return ParamValueNotAllowedError

    return True
