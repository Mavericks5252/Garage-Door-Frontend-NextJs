import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Icon,
  Container,
  VStack,
  HStack
} from "@chakra-ui/react";

const steps = [
  { title: 'First', description: 'Create Login' },
  { title: 'Second', description: 'Plate Number' },
  { title: 'Third', description: 'Alerts' },
]


export default function CreateUser() {
    const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })
  return(
    <Container>
        <HStack>
            <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
                {steps.map((step, index) => (
                <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
        </HStack>
  </Container>
  )
};
