"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// PhonePe-style Loading States
interface LoadingStateProps {
  isLoading: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  message?: string;
  className?: string;
}

export function LoadingState({ 
  isLoading, 
  isSuccess = false, 
  isError = false, 
  message = "Loading...",
  className 
}: LoadingStateProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className={cn("flex items-center justify-center p-4", className)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="h-5 w-5 text-primary" />
            </motion.div>
            <motion.span
              className="text-sm font-medium text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {message}
            </motion.span>
          </div>
        </motion.div>
      )}

      {isSuccess && (
        <motion.div
          className={cn("flex items-center justify-center p-4", className)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 30,
                delay: 0.1 
              }}
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
            </motion.div>
            <motion.span
              className="text-sm font-medium text-green-700"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Success!
            </motion.span>
          </div>
        </motion.div>
      )}

      {isError && (
        <motion.div
          className={cn("flex items-center justify-center p-4", className)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 30,
                delay: 0.1 
              }}
            >
              <XCircle className="h-5 w-5 text-red-500" />
            </motion.div>
            <motion.span
              className="text-sm font-medium text-red-700"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Error occurred
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// PhonePe-style Progress Indicator
interface ProgressIndicatorProps {
  progress: number;
  total: number;
  currentStep: string;
  steps: string[];
  className?: string;
}

export function ProgressIndicator({ 
  progress, 
  total, 
  currentStep, 
  steps, 
  className 
}: ProgressIndicatorProps) {
  const percentage = (progress / total) * 100;

  return (
    <div className={cn("w-full", className)}>
      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "linear",
            repeatDelay: 1
          }}
        />
      </div>

      {/* Steps */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                index < progress 
                  ? 'bg-primary text-white' 
                  : index === progress - 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {index < progress ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle className="h-4 w-4" />
                </motion.div>
              ) : (
                index + 1
              )}
            </motion.div>
            <motion.span
              className={`text-xs mt-1 text-center ${
                index === progress - 1 ? 'text-primary font-semibold' : 'text-gray-500'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {step}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Current Step */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-sm text-gray-600">
          Step {progress} of {total}: {currentStep}
        </span>
      </motion.div>
    </div>
  );
}

// PhonePe-style Success Animation
interface SuccessAnimationProps {
  isVisible: boolean;
  message?: string;
  onComplete?: () => void;
  className?: string;
}

export function SuccessAnimation({ 
  isVisible, 
  message = "Success!", 
  onComplete,
  className 
}: SuccessAnimationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn("fixed inset-0 bg-black/50 flex items-center justify-center z-50", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            onAnimationComplete={onComplete}
          >
            {/* Success Icon */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 0.2, 
                type: "spring", 
                stiffness: 500, 
                damping: 30 
              }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {message}
              </h3>
              <p className="text-gray-600">
                Your request has been processed successfully.
              </p>
            </motion.div>

            {/* Confetti Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    y: 0 
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: -100,
                    x: (Math.random() - 0.5) * 100
                  }}
                  transition={{ 
                    delay: 0.5 + i * 0.05,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// PhonePe-style Error Animation
interface ErrorAnimationProps {
  isVisible: boolean;
  message?: string;
  onDismiss?: () => void;
  className?: string;
}

export function ErrorAnimation({ 
  isVisible, 
  message = "Something went wrong", 
  onDismiss,
  className 
}: ErrorAnimationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn("fixed inset-0 bg-black/50 flex items-center justify-center z-50", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            {/* Error Icon */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 0.2, 
                type: "spring", 
                stiffness: 500, 
                damping: 30 
              }}
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <XCircle className="h-10 w-10 text-red-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {message}
              </h3>
              <p className="text-gray-600 mb-6">
                Please try again or contact support if the problem persists.
              </p>
              
              <motion.button
                onClick={onDismiss}
                className="px-6 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Again
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// PhonePe-style Skeleton Loader
interface SkeletonLoaderProps {
  count?: number;
  className?: string;
}

export function SkeletonLoader({ count = 3, className }: SkeletonLoaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-gray-200 rounded-xl p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-12 h-12 bg-gray-300 rounded-xl"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1, 0.95]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
            <div className="flex-1 space-y-2">
              <motion.div
                className="h-4 bg-gray-300 rounded w-3/4"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scaleX: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 + 0.1 
                }}
              />
              <motion.div
                className="h-3 bg-gray-300 rounded w-1/2"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scaleX: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2 + 0.2 
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
